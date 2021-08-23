/* eslint-disable no-nested-ternary */
import { Op } from 'sequelize';
import FileInfo from '../models/file_info.model';
import PopulationInfo from '../models/population_info.model';
import { onError, onSuccess } from '../utils/response';

const getFileUploaded = async (req, res) => {
  const { file_id: fileId } = req.params;
  const {
    offset,
    limit,
    withErrors,
    committed,
    recordId,
  } = req.query;
  const foundFile = await FileInfo.findOne({ where: { id: fileId } });
  if (!foundFile) {
    return onError(res, 404, 'File not found!');
  }
  const errors = (withErrors === 'true')
    ? { errors: { [Op.not]: '{}' } }
    : (withErrors === undefined)
      ? {}
      : { errors: '{}' };
  const isCommitted = committed === undefined ? {} : { isCommitted: committed === 'true' };
  const record = recordId ? { id: recordId } : {};
  const fileData = await PopulationInfo.findAll({
    where: {
      file_id: fileId,
      ...errors,
      ...isCommitted,
      ...record,
    },
    limit: limit ? parseInt(limit, 10) : null,
    offset: offset ? parseInt(offset, 10) : null,
  });
  return onSuccess(res, 200, 'Data found successfully.', fileData);
};

export default getFileUploaded;
