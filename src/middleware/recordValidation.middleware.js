/* eslint-disable no-unused-expressions */
import { onError } from '../utils/response';

/* eslint-disable no-undef */
const recordValidation = (req, res, next) => {
  const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  const regPhoneNumber = /\+?[0-9]{12}/;
  const regNID = /^[0-9]{16}/;
  ('female');
  const regGender = /[mM]ale|[fF]emale|[mM]|[fF]/;
  const regEmail = /\S+@\S+\.\S+/;
  const errors = {};

  !regName.test(req?.body?.names || '') && (errors.names = 'Invalid name');
  !regPhoneNumber.test(req?.body?.phone_number || '')
    && (errors.phone_number = 'Invalid phone number');
  !regNID.test(req?.body?.NID || '') && (errors.NID = 'Invalid national ID (NID)');
  !regGender.test(req?.body?.gender || '') && (errors.gender = 'Invalid gender');
  !regEmail.test(req?.body?.email || '') && (errors.email = 'Invalid email');
  if (Object.keys(errors)?.length) {
    return onError(res, 400, errors);
  }
  return next();
};

export default recordValidation;
