import PopulationInfo from '../models/population_info.model';
import { onError } from '../utils/response';

const findRecord = async (req, res, next) => {
  const recordId = req?.query?.recordId || req?.params?.recordId;
  const record = await PopulationInfo.findOne({ where: { id: recordId } });
  if (!record) {
    return onError(res, 404, 'Record not found!');
  }
  req.recordData = record;
  return next();
};

export default findRecord;
