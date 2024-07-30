import express, {urlencoded, json} from 'express';
import cors from 'cors';
import 'dotenv/config';

import collectionRouter from './routes/collection';
import productRouter from './routes/product';
import checkoutRouter from './routes/checkout';
import { DEV_PORT, PROD_PORT } from './constants';

const env = process.env.NODE_ENV;

const PORT = env === 'dev'
  ? DEV_PORT
  : PROD_PORT;

const app = express();
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json()); 

app.use('/collection', collectionRouter);
app.use('/product', productRouter);
app.use('/checkout', checkoutRouter);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
