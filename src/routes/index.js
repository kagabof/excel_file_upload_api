/* eslint-disable no-unused-vars */
import express from 'express';
import commitRecords from '../controllers/commitRecords';
import getData from '../controllers/getData';
import getFileUploaded from '../controllers/getFileData';
import getFiles from '../controllers/getFiles';
import updateRecord from '../controllers/updateRecord';
import routeUpload from '../controllers/upload.controller';
import recordValidation from '../middleware/recordValidation';
import { asyncWrapper } from '../utils/asyncWrapper';
import findRecord from '../middleware/findRecord';
import findFile from '../middleware/findFile';
import authRoutes from './auth';
import { authenticate } from '../utils/jtwHelper';

const route = express.Router();

route.use('/auth', authRoutes);

route.use('/upload', routeUpload);
route.get('/files/data/:file_id', findFile, asyncWrapper(getFileUploaded));
route.get('/files', asyncWrapper(getFiles));
route.get('/data', authenticate, asyncWrapper(getData));
route.patch('/record/:recordId', recordValidation, findRecord, asyncWrapper(updateRecord));
route.patch('/commit/:file_id', findFile, asyncWrapper(commitRecords));

export default route;
