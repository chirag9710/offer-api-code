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
    let response = {};
    if (!req.query.page) {
        req.query.page = 1;
    } if (!req.query.limit){
        req.query.limit = 20;
    }
    const options = {
        page: req.query.page,
        limit: req.query.limit,
    };


    const aggregate = Product.aggregate([
        {
            $match: {},
        },
        {
            $sort: { createdAt: -1 }
        }
    ]);
    await Product.aggregatePaginate(aggregate,options, function  (err, result) {
        if (!err){
            response.status_code = 200;
            response.status = 'true';
            response.status_message = 'Data Found';
            response.totalPosts = result.totalDocs;
            response.limit = result.limit;
            response.page = result.page;
            response.totalPages = result.totalPages;
            response.hasNextPage = result.hasNextPage;
            response.nextPage = result.nextPage;
            response.posts = result.docs;
            res.send(response);
            return;
        }
        console.log(err);
        response.status_code = 200;
        response.status = 'false';
        response.status_message = 'Fail to fetched';
        response.error = err;
        res.send(response);
        return;

    });
    return;
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





