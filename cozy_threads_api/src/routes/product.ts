import express from 'express';

const router = express.Router();

router.get('/:productId', (req, res, next) => {
  const { productId } = req.params;

  try {
    res.json({})
  } catch (error) {
    next(error);
  }
});

export default router;