/* eslint-disable no-unused-vars */
import express from 'express';
import cors from 'cors';
import busboy from 'connect-busboy';
import route from './routes';
import { onServerError } from './utils/response';

const app = express();
const port = process.env.PORT || 5000;
app.use(busboy({
  highWaterMark: 1024 * 1024, // Set 2MiB buffer
})); // Insert the busboy middle-ware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to upload excel api' });
});
app.use(route);

app.use((error, req, res, next) => onServerError(res));

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
