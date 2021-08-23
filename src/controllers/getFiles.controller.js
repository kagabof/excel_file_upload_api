import FileInfo from '../models/file_info.model';
import { onSuccess } from '../utils/response';

const getFiles = async (req, res) => {
  const {
    offset,
    limit,
  } = req.query;
  const files = await FileInfo.findAll({
    limit: limit ? parseInt(limit, 10) : null,
    offset: offset ? parseInt(offset, 10) : null,
    order: [
      ['uploaded_date', 'DESC'],
    ],
  });
  return onSuccess(res, 200, 'Files found successfully.', files);
};

export default getFiles;
