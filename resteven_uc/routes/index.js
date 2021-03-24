var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//aqui definimos el endpoint (la url para acceder al recurso listarinvitados)
const invitados= require("../modulos/invitados/guest");
router.get('/v1/guest', invitados.listaInvitados)

module.exports = router;
