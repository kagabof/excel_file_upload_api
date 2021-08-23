import FileInfo from '../models/file_info.model';
import { onError } from '../utils/response';

const findFile = async (req, res, next) => {
  const fileId = req?.query?.file_id || req?.params?.file_id;
  const foundFile = await FileInfo.findOne({ where: { id: fileId } });
  if (!foundFile) {
    return onError(res, 404, 'File not found!');
  }
  req.fileInfo = foundFile?.toJSON();
  return next();
};

export default findFile;
