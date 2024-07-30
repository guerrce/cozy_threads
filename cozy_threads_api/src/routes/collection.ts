import express from 'express';
import Stripe from 'stripe';

const router = express.Router();

router.get('/:collectionName', async (req, res, next) => {
  const { collectionName } = req.params;
  const { limit, page } = req.query;
  const stripe_key = process.env.STRIPE_KEY;

  const activeQuery = 'active:\'true\'';
  const searchQuery = collectionName !== 'all'
    ? `${activeQuery} AND metadata[\'collection\']: \'${collectionName}\'`
    : activeQuery;

  if (stripe_key){
    const stripe = new Stripe(stripe_key);
    try {
      const collection = await stripe.products.search({
        query: searchQuery,
        limit: limit ? parseInt(limit?.toString() || '10') : undefined,
        page: page?.toString(),
      });
      const data = collection.data.map(product => ({
        id: product.id,
        name: product.name,
        active: product.active,
        priceId: product.default_price,
        description: product.description,
        collection: product.metadata.collection || null,
        images: product.images,
      }));
      collection.lastResponse
      res.json({
        data,
        hasMore: collection.has_more,
        nextPage: collection.next_page,
      });
    } catch (error) {
      next(error);
    }
  }

});

export default router;
