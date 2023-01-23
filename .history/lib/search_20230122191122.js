const router = require('express').Router();
const {products} = require("./scraping");


router.get("/search", async function  (req,res) {
    query = req.query;
    data = await products(req.query);
    res.json(data);
});

module.exports = router;