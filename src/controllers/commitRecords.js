import { Op } from 'sequelize';
import PopulationInfo from '../models/population_info.model';
import { onSuccess } from '../utils/response';

const commitRecords = async (req, res) => {
  const { fileInfo } = req;
  const dataToCommitCount = await PopulationInfo.count({
    where: {
      file_id: fileInfo.id,
      errors: '{}',
      isCommitted: false,
    },
  });
  const dataWithErrors = await PopulationInfo.count({
    where: {
      file_id: fileInfo.id,
      errors: { [Op.not]: '{}' },
      isCommitted: false,
    },
  });
  if (!dataToCommitCount && dataWithErrors) {
    return onSuccess(res, 404, 'No records commit, please check on errors', {
      committedRecords: dataToCommitCount,
      recordsWithErrors: dataWithErrors,
    });
  }
  if (!dataToCommitCount && !dataWithErrors) {
    return onSuccess(res, 404, 'No records commit!', {
      committedRecords: dataToCommitCount,
      recordsWithErrors: dataWithErrors,
    });
  }
  await PopulationInfo.update({
    isCommitted: true,
  }, {
    where: {
      file_id: fileInfo.id,
      errors: '{}',
      isCommitted: false,
    },
  });
  return onSuccess(res, 201, 'Records commit successfully.', {
    committedRecords: dataToCommitCount,
    recordsWithErrors: dataWithErrors,
  });
};

export default commitRecords;
