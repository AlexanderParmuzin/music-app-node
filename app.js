require('dotenv').config();
const express = require('express');

const { sequelize } = require('./models');
const fs = require('fs');
const path = require('path');
const logger = require('./logger');
const morgan = require('morgan');

const appRouter = require('./routes/app.routes');
const bodyParser = require('body-parser');
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'logs/access.log'),
  { flags: 'a' }
);

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(bodyParser.json());
app.use(morgan('combined', { stream: accessLogStream }));

// Static files
app.use('/public', express.static('./public/'));

// Set views
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('', (req, res) => {
  res.render('index');
});

app.use('/routes', appRouter);

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    logger.info('Connection has been established successfully.');
    await sequelize.sync();
    logger.info(`Server is running on PORT ${PORT}`);
  } catch (error) {
    logger.error('Unable to connect to the database:', error);
  }
});
