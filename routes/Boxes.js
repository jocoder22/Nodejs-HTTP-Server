
const router = require('express').Router();

router.get('/:size', (req, res) => {
  res.render('Boxes/length', {length: req.params.size,
    title: `${req.params.size}px Box`});
});


module.exports = router;
