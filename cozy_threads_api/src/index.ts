import express, {urlencoded, json} from 'express';
import cors from 'cors';

import collectionRouter from './routes/collection';
import productRouter from './routes/product';
import checkoutRouter from './routes/checkout';

const PORT = 3001;

const app = express();
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json()); 

app.use('/collection', collectionRouter);
app.use('/product', productRouter);
app.use('./checkout', checkoutRouter);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
