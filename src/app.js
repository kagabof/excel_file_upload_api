import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to upload excel api' });
});

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
