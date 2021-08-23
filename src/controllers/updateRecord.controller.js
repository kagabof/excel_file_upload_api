import PopulationInfo from '../models/population_info.model';
import { onError, onSuccess } from '../utils/response';

const updateRecord = async (req, res) => {
  const record = req.recordData;
  if (!record) {
    return onError(res, 404, 'Record not found!');
  }
  const recodeUpdated = await PopulationInfo.update({
    ...req.body,
    errors: '{}',
  },
  {
    where: {
      id: record?.id,
    },
  });
  if (!recodeUpdated) {
    return onError(res, 500, 'Record not updated!');
  }
  return onSuccess(res, 201, 'Record updated successfully.');
};

export default updateRecord;
