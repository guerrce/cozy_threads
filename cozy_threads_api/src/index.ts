import express, {urlencoded, json} from 'express';
import cors from 'cors';

const PORT = 3001;

const app = express();
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json()); 

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
