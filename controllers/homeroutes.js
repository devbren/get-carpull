const router = require('express').Router();
const { User, Cars } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const carData = await Cars.findAll({
      //test if this works
      where: { forSale: 1 } 
    });
    console.log(carData)




    //renders based off homepage.handlebars
  res.render('homepage', {
    users,
    logged_in: req.session.logged_in,
  });
} catch (err) {
  res.status(500).json(err);
}
});

router.get('/login', (req, res) => {
if (req.session.logged_in) {
  res.redirect('/');
  return;
}

res.render('login');
});

module.exports = router;
