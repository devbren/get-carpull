const router = require('express').Router();

router.get('/', async (req, res) => {
    //renders based off homepage.handlebars
  res.render('homepage');
});

module.exports = router;
