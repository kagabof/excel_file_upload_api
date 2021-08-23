/* eslint-disable camelcase */
/* eslint-disable no-nested-ternary */
import { Op } from 'sequelize';
import PopulationInfo from '../models/population_info.model';
import { onSuccess } from '../utils/response';

const getData = async (req, res) => {
  const {
    offset, limit, withErrors, committed, fileId, recordId,
  } = req.query;

  const errors = withErrors === 'true'
    ? { errors: { [Op.not]: '{}' } }
    : withErrors === undefined
      ? {}
      : { errors: '{}' };
  const isCommitted = committed === undefined ? {} : { isCommitted: committed === 'true' };
  const file_id = !fileId ? {} : { file_id: fileId };
  const record = recordId ? { id: recordId } : {};
  const fileData = await PopulationInfo.findAll({
    where: {
      ...file_id,
      ...errors,
      ...isCommitted,
      ...record,
    },
    limit: limit ? parseInt(limit, 10) : null,
    offset: offset ? parseInt(offset, 10) : null,
  });
  const dataObj = fileData?.length ? fileData.map((element) => ({
    ...element.toJSON(),
    errors: JSON.parse(element.toJSON()?.errors || {}),
  })) : {};
  return onSuccess(res, 200, 'Data found successfully.', dataObj);
};

export default getData;
