var comentarioModel = require('../models/comentarioModel');

function comentar(req, res) {

    var discucao = req.body.idDiscucao;
    var usuario = req.body.idUsuario;
    var texto = req.body.texto;

    console.log('a');

    comentarioModel.comentar(discucao, usuario, texto)
        .then(

            res.send('Comentário efetuado com sucesso!')

        )

}

function exibirComentarios(req, res) {

    var discucao = req.body.idDiscucao;

    console.log('b');

    comentarioModel.exibirComentarios(discucao)
        .then(function (resultado) {

            console.log('c');
            res.json(resultado);

        })

}

module.exports = {

    comentar,
    exibirComentarios
}