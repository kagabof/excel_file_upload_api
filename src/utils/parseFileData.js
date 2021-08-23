/**
 * This function returns an object with buffer, fileType, fileName, fileEnc, fieldname
 * @param { Request } req
 * @returns { object } return an object
 */
const parseFileData = async (req) => new Promise((resolve, reject) => {
  const buffers = [];
  const { busboy } = req;
  let conc = {};
  req.pipe(busboy);
  busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
    file.on('data', (data) => {
      buffers.push(data);
    });
    file.on('end', () => {
      conc = {
        buffer: Buffer.concat(buffers),
        fileType: mimetype,
        fileName: filename,
        fileEnc: encoding,
        fieldname,
      };
    });
  });
  busboy.on('error', (error) => reject(error));
  busboy.on('finish', () => {
    resolve(conc);
  });
});

export default parseFileData;
