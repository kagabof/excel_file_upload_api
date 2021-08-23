/* eslint-disable camelcase */
/* eslint-disable no-unused-expressions */
import crypto from 'crypto';

/**
 * This function returns an object and validate a row
 * @param { obj } row data
 * @param { file_id } file id containing the row
 * @returns { object } return an object
 */
const rowValidate = (obj, file_id) => {
  const regName = /^[a-zA-Z]+ [a-zA-Z ]+$/;
  const regPhoneNumber = /\+?[0-9]{12}/;
  const regNID = /^[0-9]{16}/;
  ('female');
  const regGender = /[mM]ale|[fF]emale|[mM]|[fF]/;
  const regEmail = /\S+@\S+\.\S+/;
  const errors = {};

  !regName.test(obj?.names || '') && (errors.names = 'Invalid name');
  !regPhoneNumber.test(obj.phone_number || '')
    && (errors.phone_number = 'Invalid phone number');
  !regNID.test(obj?.NID || '') && (errors.NID = 'Invalid national ID (NID)');
  !regGender.test(obj?.gender || '') && (errors.gender = 'Invalid gender');
  !regEmail.test(obj?.email || '') && (errors.email = 'Invalid email');
  return {
    file_id,
    id: crypto.randomBytes(16).toString('hex'),
    ...obj,
    errors: JSON.stringify(errors),
  };
};

export default rowValidate;
