/* eslint-disable no-unused-vars */
import express from 'express';
import createAccount from '../controllers/createAccount.controller';
import userSignIn from '../controllers/userSignIn.controller';
import validationUser from '../middleware/userValidate.middleware';
import { asyncWrapper } from '../utils/asyncWrapper';

const route = express.Router();

route.post('/signup', validationUser, asyncWrapper(createAccount));
route.get('/signin', asyncWrapper(userSignIn));

export default route;
