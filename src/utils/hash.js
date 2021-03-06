/* eslint-disable import/prefer-default-export */
import bcrypt from 'bcrypt';

export const hashPassword = async (textPassword) => {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(textPassword, salt);
  return hash;
};

export const hashCompare = async (textPassword, hash) => {
  const isEqual = await bcrypt.compareSync(textPassword, hash);
  return isEqual;
};
