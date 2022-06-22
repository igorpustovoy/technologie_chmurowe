const Redis = require("ioredis");

const dbConnData = {
  port: process.env.REDIS_PORT || 6379,
  host: process.env.REDIS_HOST || '127.0.0.1',
};

console.log("Redis connection data:", dbConnData);

const client = new Redis(dbConnData);

module.exports = client;