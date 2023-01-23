const router = require('express').Router();

router.
get("/search", async function  (req,res) {
    query = req.query;
    data = await products(req.query);
    res.json(data);
  });

module.exports = router;