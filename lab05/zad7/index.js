const express = require('express');
const app = express();

require('dotenv').config();

app.use(express.json());


const clientRedis = require('./redis-config');

const clientPg = require('./postgres-config');
clientPg.connect();

const port = process.env.PORT || 5000
app.listen(port, async () => {
    console.log(`Example app listening on port ${port}`)
  })


app.get('/test', async (req, res) => {
  clientPg.query("SELECT * FROM accounts;", (err, rows) => {
    console.log(rows);
    res.send(JSON.stringify(rows.rows));
  });
});

// app.get('/nwd', async (req, res) => {
//   const { a, b } = req.query;
//   const nwd = (a, b) => {
//     if (!b) return a;
//     return nwd(b, a % b);
//   };
//   try {
//     res.send(JSON.stringify(nwd(a, b)));
//   } catch (err) {
//     console.log(err);
//   }
// });

app.post('/nwd', async (req, res) => {
  const { a, b } = req.body;
  const nwd = (a, b) => {
    if (!b) return a;
    return nwd(b, a % b);
  };
  try {
    const val = await clientRedis.hget('dividers', `${a}_${b}`);
    console.log(val);
    if (val) {
      console.log("REDIS");
      return res.send({nwd: val});
    }
    await clientRedis.hset('dividers',`${a}_${b}`, nwd(a, b));
    await clientPg.query("INSERT INTO dividers (a, b, nwd) VALUES ($1, $2, $3);", [a, b, nwd(a, b)]);
    console.log("POSTGRES");
    return res.send({nwd: nwd(a, b)});
  } catch (err) {
    console.log(err);
  }
});

// docker run --name express --network nwd -p 5000:5005 -e PORT=5005 express-lab7