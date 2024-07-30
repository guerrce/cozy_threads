import express from 'express';
import Stripe from 'stripe';

const router = express.Router();

router.get('/:productId', async (req, res, next) => {
  const stripe_key = process.env.STRIPE_KEY;
  const { productId } = req.params;
  if (stripe_key){
    const stripe = new Stripe(stripe_key);
    try {
      const product = await stripe.products.retrieve(
        productId,
        {
          expand: [ 'default_price' ],
        }
      );
      const priceObject = product.default_price as Stripe.Price | null;
      res.json({
        id: product.id,
        name: product.name,
        active: product.active,
        priceId: priceObject?.id || null,
        priceCurrency: priceObject?.currency || null,
        priceUnits: priceObject?.unit_amount || null,
        description: product.description,
        collection: product.metadata.collection || null,
        images: product.images,
      });
    } catch (error) {
      next(error);
    }
  }
});

export default router;