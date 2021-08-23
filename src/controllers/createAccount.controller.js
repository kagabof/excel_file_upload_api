/* eslint-disable no-return-await */
/* eslint-disable no-shadow */
import Users from '../models/users.model';
import { hashPassword } from '../utils/hash';
import { jwtSign } from '../utils/jtwHelper';
import { onError, onSuccess } from '../utils/response';

const createAccount = async (req, res) => {
  const {
    email, password,
  } = req.body;
  const foundUser = await Users.findAll({ where: { email } });
  if (foundUser?.length) {
    return onError(res, 400, `User with email ${email} exist, please login!`);
  }
  const hashedPassword = await hashPassword(password);
  const user = await Users.create({
    ...req.body,
    password: hashedPassword,
  });
  const returnUser = user?.toJSON();
  delete returnUser?.password;
  const token = jwtSign(returnUser?.id, returnUser?.email);
  return onSuccess(res, 201, 'Account successfully created.', { ...returnUser, token });
};

export default createAccount;
