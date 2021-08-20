/**
 * This function returns success reponse to the client
 * @param { Response } res
 * @param { number } statusCode
 * @param { string } message
 * @param { object } data
 * @returns { void }
 */
export const onSuccess = (res, statusCode, message, data) => res.status(statusCode).json({
  res_status: statusCode,
  res_msg: message,
  data,
});

/**
   * This function returns error reponse to the client
   * @param { Response } res
   * @param { number } statusCode
   * @param { string } error
   * @returns { void }
   */
export const onError = (res, statusCode, error) => res.status(statusCode).json({
  res_status: statusCode,
  error_msg: error,
});

/**
   * This function returns internal server error response to the client
   * @param { Response } res
   * @returns { void }
   */
export const onServerError = (res, message) => res.status(500).json({
  res_status: 500,
  error_msg: message || 'Internal Server Error',
});
