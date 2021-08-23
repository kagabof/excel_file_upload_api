/* eslint-disable no-plusplus */
/**
 * This function returns an object
 * @param { columnNames } an array of strings (keys)
 * * @param { row } an array of strings (values)
 * @returns { object } return an object
 */
const rowToObject = (columnNames, row) => {
  const obj = {};
  for (let i = 0; i < columnNames?.length; i++) {
    obj[columnNames[i]?.replace(' ', '_')] = row[i];
  }
  return obj;
};
export default rowToObject;
