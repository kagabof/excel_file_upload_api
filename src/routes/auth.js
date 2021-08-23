/* eslint-disable no-unused-vars */
import express from 'express';
import createAccount from '../controllers/createAccount';
import validationUser from '../middleware/userValidate';
import { asyncWrapper } from '../utils/asyncWrapper';

const route = express.Router();

route.post('/signup', validationUser, asyncWrapper(createAccount));
export default route;
