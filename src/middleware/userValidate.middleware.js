/* eslint-disable dot-notation */
/* eslint-disable no-unused-expressions */
import { onError } from '../utils/response';

const validationUser = (req, res, next) => {
  const regName = /^[a-zA-Z]+ [a-zA-Z ]+$/;
  const regEmail = /\S+@\S+\.\S+/;
  const regUsername = /^[a-zA-Z]{2,}/;
  const rePassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const errors = {};
  !regName.test(req?.body?.names || '') && (errors['names'] = 'Invalid name');
  !regUsername.test(req?.body?.username || '')
    && (errors['username'] = 'Invalid username');
  !regEmail.test(req?.body?.email || '') && (errors['email'] = 'Invalid email');
  !rePassword.test(req?.body?.password || '')
    && (errors['password'] = 'Password should contain minimum eight characters, at list one upper and lower case later, one number and one special character.');
  if (Object.keys(errors)?.length) {
    return onError(res, 400, errors);
  }
  return next();
};

export default validationUser;
