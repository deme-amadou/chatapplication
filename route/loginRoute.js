const express = require("express");
const app = express();
const router = express.Router();
var bodyParser = require('body-parser');
//var localStorage = require('localStorage')

router.route("/").post((req, res, next) => {
    //username = localStorage.setItem("user", req.body.username);
    //res.send('Hello !');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    console.log(req.post['username'])
    //res.render('index_.html', {username:req.body.username})
});

module.exports = router;
