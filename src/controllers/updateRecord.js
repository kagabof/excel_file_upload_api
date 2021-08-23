import PopulationInfo from '../models/population_info.model';
import { onError, onSuccess } from '../utils/response';

const updateRecord = async (req, res) => {
  const { recordId } = req.params;
  const record = await PopulationInfo.findOne({ where: { id: recordId } });
  if (!record) {
    return onError(res, 404, 'Record not found!');
  }
  const recodeUpdated = await PopulationInfo.update(
    req.body,
    {
      where: {
        id: record?.id,
      },
    },
  );
  if (!recodeUpdated) {
    return onError(res, 500, 'Record not updated!');
  }
  return onSuccess(res, 201, 'Record updated successfully.');
};

export default updateRecord;
