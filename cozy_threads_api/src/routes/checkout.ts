import express from 'express';
import Stripe from 'stripe';

const router = express.Router();

type RequestLineItem = {
  quantity: number,
  id: string,
};

router.post('/', async (req, res, next) => {
  const lineItems: RequestLineItem[] = req.body.lineItems;
  const transformedLineItems = lineItems.map(item => ({
    quantity: item.quantity,
    price: item.id,
  }));
  const stripe_key = process.env.STRIPE_KEY;
  const front_end_url = process.env.FRONT_END_URL;

  if (stripe_key){
    const stripe = new Stripe(stripe_key);
    try {
      const session = await stripe.checkout.sessions.create({
        line_items: transformedLineItems,
        mode: 'payment',
        success_url: `${front_end_url}/order-success`,
        cancel_url: `${front_end_url}/order-cancelled`,
      });
      res.json({
        url: session.url,
      });
    } catch (error) {
      next(error);
    }
  }
});

export default router;
