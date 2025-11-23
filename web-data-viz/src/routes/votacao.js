var express = require("express");
var router = express.Router();

var votacaoController = require("../controllers/votacaoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post('/votar', function (req, res){
    
    votacaoController.votar(req,res);

})

router.post('/gerarGrafico', function(req,res){

    votacaoController.gerarGrafico(req,res);

})

module.exports = router;