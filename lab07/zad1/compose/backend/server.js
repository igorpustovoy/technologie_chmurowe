const express = require('express');

const app = express();

const PORT = process.env.PGPORT;

const clientRedis = require('./redis-config');

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World XDDD');
});

app.post('/numbers', async (req, res) => {
  const { number } = req.body;
  try {
    const mess = await clientRedis.lpush("numbers", number);
    res.send({numbers: mess});
  } catch (err) {
    console.log(err);
  }
});

app.get('/numbers', async (req, res) => {
  try {
    const numbers = await clientRedis.lrange("numbers", 0, -1);
    res.send(numbers);
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});