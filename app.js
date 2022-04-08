require('dotenv').config();
const express = require('express');

const sequelize = require('./db/db.config');
const appRouter = require('./routes/app.routes');
const bodyParser = require('body-parser');

const Artist = require('./models/artist');
const Song = require('./models/song');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Static files
app.use('/public', express.static('./public/'));

// Set views
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('', (req, res) => {
  res.render('index');
});

app.use('/routes', appRouter);

app.listen(PORT, () => {
  sequelize.sync();
  console.log(`Server is running on PORT ${PORT}`);
});
