const { Router } = require("express");
const router = Router();
const Puntos = require("../../models/Puntos");
const conectarDB = require("../../mongoDb");
router.get("/", function(req, res) {
    const orden = req.query.orden
    conectarDB();
    Puntos.find({ orden: orden }).then(punto => {
        res.json(punto[0]);
    })
});

module.exports = router;