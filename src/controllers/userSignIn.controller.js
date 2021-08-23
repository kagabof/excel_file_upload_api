import Users from '../models/users.model';
import { hashCompare } from '../utils/hash';
import { jwtSign } from '../utils/jtwHelper';
import { onError, onSuccess } from '../utils/response';

const userSignIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await Users.findOne({ email });
  const userFound = user?.toJSON();
  if (!userFound?.id) {
    return onError(res, 403, 'Authentication failed.');
  }
  const isEqual = await hashCompare(password, userFound?.password);
  if (!isEqual) {
    return onError(res, 403, 'Authentication failed.');
  }
  const token = jwtSign(userFound?.id, userFound?.email);
  return onSuccess(res, 200, 'Successfully logged in', { token });
};

export default userSignIn;
