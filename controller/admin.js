var express = require('express');
var router = express.Router();

//
router.get('/', (req, res) => {
    if (req.cookies['login'] != null) {
        var data = {
            username: req.cookies['login']
        }
        res.render('/admin/index', data);
    } else {
        res.redirect('/login/index');
    }
});

router.post('/', (req, res) => {

    res.render('posted');
});


module.exports = router;
