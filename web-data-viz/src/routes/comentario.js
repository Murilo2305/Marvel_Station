var express = require("express");
var router = express.Router();

var comentarioController = require("../controllers/comentarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post('/comentar', function (req, res){

    comentarioController.comentar(req,res);

})

router.post('/exibirComentarios', function(req,res){
    console.log('a');

    comentarioController.exibirComentarios(req,res);

})

module.exports = router;