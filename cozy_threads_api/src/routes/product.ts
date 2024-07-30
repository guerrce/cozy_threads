import express from 'express';
import Stripe from 'stripe';

const router = express.Router();

router.get('/:productId', async (req, res, next) => {
  const stripe_key = process.env.STRIPE_KEY;
  const { productId } = req.params;
  if (stripe_key){
    const stripe = new Stripe(stripe_key);
    try {
      const product: Stripe.Product = await stripe.products.retrieve(productId);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
});

export default router;