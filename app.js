require('dotenv').config()
const express = require('express');

const sequelize = require('./db/db.config');
const appRouter = require('./routes/app.routes');
const bodyParser = require('body-parser');

const Artist = require('./models/artist');
const Song = require('./models/song');

const app = express();

const PORT = process.env.PORT || 3000

app.use(bodyParser.json());

app.use('/routes', appRouter);

app.get('/', (req, res, next) => {
  res.status(404).json({ pageTitle: 'rap' });
});

app.listen(PORT, () => {
  sequelize.sync();
  console.log(`Server is running on PORT ${PORT}`);
});
