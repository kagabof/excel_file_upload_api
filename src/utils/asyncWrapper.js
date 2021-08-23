/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
/**
 * asyncWrapper function handles all unexpected errors
 * @name asyncWrapper
 * @description Pass the function that has req, res and next
 * @param { Function } function
 * @returns { Promise }
 */
const asyncWrapper = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (err) {
    return next(err);
  }
};

export { asyncWrapper };
