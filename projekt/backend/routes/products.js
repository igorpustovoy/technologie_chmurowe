const express = require("express");
const router = express.Router({mergeParams: true});
const redisClient = require("../redis/redis-config");

const Product = require("../mongo/models/Product");

router.get("/", async (req, res) => {
  try {
    const keys = await redisClient.keys("products:*");
    let products = [];
    for(const key of keys) {
        const product = await redisClient.call('JSON.GET', key);
        products.push(JSON.parse(product));
    }
    if(products.length === 0) {
        console.log("No products in redis");
        products = await Product.find();
        products = products.map(p => ({id: p._id, name: p.name, price: p.price, image_url: p.image_url}))
        for(const product of products) {
            await redisClient.call('JSON.SET', `products:${product.id}`, ".", JSON.stringify(product));
        }
    }
    console.log("Products:", products);
    res.send(products);
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const product = new Product({ ...req.body });
    const mongoObject = await product.save();
    console.log("ID:", mongoObject._id);
    await redisClient.call('JSON.SET', `products:${mongoObject._id}`, ".", JSON.stringify({
      id: mongoObject._id,
      name: req.body.name,
      price: req.body.price,
      image_url: req.body.image_url
    }));
    res.send({
        id: mongoObject._id,
        ...req.body,
      });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
