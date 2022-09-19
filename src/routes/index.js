const { Router } = require("express");
const router = Router();
const Punto = require("../models/Punto");
const request = require('request');


router.get("/", function(req, res) {

    request.get(`http://${process.env.DOMAIN}:${process.env.PORT}/api/tematicas`, { json: true }, (err, response, body) => {
        if (err) { return console.log(err); }
        tematicas = body;
        res.render("landing/landing", { tematicas });
    });
});
module.exports = router;