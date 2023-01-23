const router = require('express').Router();
const {products} = require("./scraping/utils");
const mongoose = require('mongoose');
const Product = require('./model/Product');
const PriceHistory = require('./model/PriceHistory');
const mongoosePaginate = require('mongoose-aggregate-paginate-v2');

/**
 * # Update Data 
 * <-- Amazon
 * --> Database
 * 
 * query = req.query;
 * data = await products(req.query);
 * res.json(data);
 */

const keywords = [
    "laptops",
    // "keyboard",
    // "lego",
    // "t-shirt"
];
fetchAndCheckProduct()

async function fetchAndCheckProduct(){
    let data = [];
    for (let index = 0; index < keywords.length; index++) {
        const word = keywords[index];
        console.log("fetching.... "+word);
        data.push(...(await products({keyword: word})).result);
    }
    updateProducts(data);
}

async function updateProducts(data){
    data.forEach(async element => {
        const query = {asin: element.asin};
        const product = await Product.findOne(query);
        const options = {new: true};
        if (product){
            await Product.findOneAndUpdate(query,{
                total_reviews:element.reviews.total_reviews,
                ratting:element.reviews.ratting,
                discounted:element.price.discounted,
                current_price:element.price.current_price,
                currency:element.price.currency,
                savings_amount:element.price.savings_amount,
                savings_percent:element.price.savings_percent,
            },options);
            const priceHistory = new PriceHistory({
                asin: element.asin,
                price:element.price.current_price,
                date: (new Date()).setHours(0,0,0,0),
            });
            await priceHistory.save();
        }else {
            const nProduct = new Product({
                asin:element.asin,
                title:element.title,
                url:element.url,
                image:element.thumbnail,
                total_reviews:element.reviews.total_reviews,
                ratting:element.reviews.ratting,
                discounted:element.price.discounted,
                current_price:element.price.current_price,
                currency:element.price.currency,
                savings_amount:element.price.savings_amount,
                savings_percent:element.price.savings_percent,
                sponsored:element.sponsored,
                amazonChoice:element.amazonChoice,
                bestSeller:element.bestSeller,
                amazonPrime:element.amazonPrime,
            });
            await nProduct.save();
        }
    });
}



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
            response.results = result.docs;
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
});

/**
 * # Search 
 * <-- Database
 */
router.get("/search", async function  (req,res) {

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
            $match: {
                title: {$regex: new RegExp(req.query.keyword, 'i') },
            },
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
            response.results = result.docs;
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
    
});

module.exports = router;





