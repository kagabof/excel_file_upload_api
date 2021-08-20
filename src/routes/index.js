/* eslint-disable no-unused-vars */
import express from 'express';
import routeUpload from '../controllers/upload.controller';

const route = express.Router();

route.use('/upload', routeUpload);

export default route;
