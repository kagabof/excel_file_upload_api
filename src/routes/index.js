/* eslint-disable no-unused-vars */
import express from 'express';
import getData from '../controllers/getData';
import getFileUploaded from '../controllers/getFileData';
import getFiles from '../controllers/getFiles';
import updateRecord from '../controllers/updateRecord';
import routeUpload from '../controllers/upload.controller';
import recordValidation from '../middleware/recordValidation';
import { asyncWrapper } from '../utils/asyncWrapper';

const route = express.Router();

route.use('/upload', routeUpload);
route.get('/files/data/:file_id', asyncWrapper(getFileUploaded));
route.get('/files', asyncWrapper(getFiles));
route.get('/data', asyncWrapper(getData));
route.patch('/record/:recordId', recordValidation, asyncWrapper(updateRecord));

export default route;
