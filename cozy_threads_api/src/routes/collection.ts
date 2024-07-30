import express from 'express';

const router = express.Router();

router.get('/:collectionName', (req, res, next) => {
  const { collectionName } = req.params;
  const { limit, page } = req.query;

  try {
    res.json({
      data: [],
    })
  } catch (error) {
    next(error);
  }
});

export default router;
