const router = require('express').Router();
const {products} = require("./scraping/utils");
const mongoose = require('mongoose');
const Product = require('./model/Product');
const mongoosePaginate = require('mongoose-aggregate-paginate-v2');

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

    if (!req.body.page) {
        req.body.page = 1;
    } if (!req.body.limit){
        req.body.limit = 20;
    }
    const options = {
        page: req.body.page,
        limit: req.body.limit,
    };


   const aggregate = Product.aggregate([
        {
            $match: queryData,
        },
        {
            $sort: { createdAt: -1 }
        }
    ]);
    Product.aggregatePaginate(aggregate,)
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





