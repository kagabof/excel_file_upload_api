/* eslint-disable camelcase */
/* eslint-disable dot-notation */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-plusplus */
import express from 'express';
import xlsx from 'node-xlsx';
import FileInfo from '../models/file_info.model';
import PopulationInfo from '../models/population_info.model';
import { asyncWrapper } from '../utils/asyncWrapper';
import parseFileData from '../utils/parseFileData';
import rowToObject from '../utils/rowToObject';
import rowValidate from '../utils/rowValidate';

const routeUpload = express.Router();

const uploadController = async (req, res) => {
  let isFieldValid = true;
  const currentTime = new Date();
  const validTitles = ['names', 'NID', 'phone number', 'gender', 'email'];
  const data = await parseFileData(req);
  const fileData = xlsx.parse(data?.buffer);
  const columnNames = fileData[0]?.data[0];
  validTitles.forEach((fieldName) => {
    if (!columnNames.includes(fieldName)) {
      isFieldValid = false;
    }
  });

  if (!isFieldValid) {
    return res.status(401).json({ error: 'Invalid file' });
  }
  const fileD = await FileInfo.create({
    name: data?.fileName,
    size: data?.buffer?.length,
    number_of_rows: fileData[0]?.data?.length,
    uploaded_date: currentTime,
  });
  if (!fileD) {
    return res.status(401).json({
      message: 'file not uploaded',
    });
  }
  const rows = [];
  fileData[0]?.data?.forEach((item, index) => {
    if (index) {
      rows.push(rowValidate(
        rowToObject(
          fileData[0]?.data[0],
          fileData[0]?.data[1],
        ),
        fileD?.toJSON()?.id,
      ));
    }
  });
  if (!rows.length) {
    const insertedData = PopulationInfo.bulkCreate(rows);
    if (insertedData) {
      return res.status(201).json({
        message: 'File uploaded successfully.',
      });
    }
  }

  return res.status(500).json({
    message: 'Something went wrong.',
  });
};

routeUpload.post('/', asyncWrapper(uploadController));

export default routeUpload;
