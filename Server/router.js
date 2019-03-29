const router = require ('express').Router();
const controller = require ('./controller.js')


router.route('/heroes/:id')
  .get(controller.retrievePics)

  module.exports = router;
  
