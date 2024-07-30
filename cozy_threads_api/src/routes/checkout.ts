import express from 'express';

const router = express.Router();

router.post('', (req, res, next) => {
  const { lineItems } = req.body;
  // const transformedLineItems = lineItems.map(item => ({
  //   ...,
  //   price: item.id,
  // }));

  try {
    res.json({
      data: [],
    })
  } catch (error) {
    next(error);
  }
});

export default router;
