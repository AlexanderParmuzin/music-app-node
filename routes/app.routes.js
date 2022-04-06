const { Router } = require('express');

const artistsRouter = require('./artists.route');
const songsRouter = require('./songs.route');

const appRouter = Router();

appRouter.use('/artists', artistsRouter);
appRouter.use('/songs', songsRouter);
appRouter.get('/', (req, res) => {
  res.json({ msg: 'This is routes page' });
});

module.exports = appRouter;
