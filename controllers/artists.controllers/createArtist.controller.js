const logger = require('../../logger');
const artistsService = require('../../services/artists.service');

const { MONETOCHKA_INCIDENT, CREATE_ARTIST_EXISTS, CREATE_ARTIST_FAIL } = require('../../consts/artists.const');

const createArtistController = async (req, res) => {
  try {
    const artistName = req.body.artistName;

    const regexMonetochka =
      /[m, м][o0, a@, о0, а@]?[n, н](e|eh|3h|е|3)(t|т|\+)[o0, a@, о0, а@]?(ch|c|ч|чъ|чь|4)(k|kh|g|к|г)[a@, а@]?/gi;

    const isRegexMatched = artistName.match(regexMonetochka);

    if (isRegexMatched) {
      res
        .status(400)
        .json({ msg: MONETOCHKA_INCIDENT });
        logger.error(`400 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`)
      return;
    }

    const foundArtist = await artistsService.getByName(artistName);

    if (foundArtist) {
      res.status(400).json({ msg: CREATE_ARTIST_EXISTS });
      logger.error(`400 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`)
      return;
    }

    const isArtistCreated = await artistsService.create(artistName);

    if (!isArtistCreated) {
      logger.error(`400 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`)
      throw new Error(CREATE_ARTIST_FAIL);
    }
    
    res.status(200).json({ msg: `Artist ${artistName} was added to database` });
    logger.info(`200 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`)
  } catch (error) {
    res.status(400).json({ errorMessage: error.message });
    logger.error(`400 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`)
  }
};

module.exports = createArtistController;
