/* eslint-disable no-unused-vars */
import express from 'express';
import commitRecords from '../controllers/commitRecords.controller';
import getData from '../controllers/getData.controller';
import getFileUploaded from '../controllers/getFileData.controller';
import getFiles from '../controllers/getFiles.controller';
import updateRecord from '../controllers/updateRecord.controller';
import routeUpload from '../controllers/upload.controller';
import recordValidation from '../middleware/recordValidation.middleware';
import { asyncWrapper } from '../utils/asyncWrapper';
import findRecord from '../middleware/findRecord.middleware';
import findFile from '../middleware/findFile.middleware';
import authRoutes from './auth';
import { authenticate } from '../utils/jtwHelper';

const route = express.Router();

route.use('/auth', authRoutes);

route.use('/upload', authenticate, routeUpload);
route.get('/files/data/:file_id', authenticate, findFile, asyncWrapper(getFileUploaded));
route.get('/files', authenticate, asyncWrapper(getFiles));
route.get('/data', authenticate, asyncWrapper(getData));
route.patch('/record/:recordId', authenticate, recordValidation, findRecord, asyncWrapper(updateRecord));
route.patch('/commit/:file_id', authenticate, findFile, asyncWrapper(commitRecords));

export default route;
