const router = require('express').Router();
const {products} = require("./scraping/utils");
const mongoose - require('mongoose');

/**
 * # Update Data 
 * <-- Amazon
 * --> Database
 */

/**
 * # Home 
 * <-- Database
 */

router.get("/all", async function  (req,res) {
   
    res.json(data);
});

/**
 * # Search 
 * <-- Database
 */

router.get("/search", async function  (req,res) {
    query = req.query;
    data = await products(req.query);
    res.json(data);
});

module.exports = router;





