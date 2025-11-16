var votacaoModel = require('../models/votacaoModel');

function votar(req, res) {

    var usuario = req.body.idUsuario;
    var discucao = req.body.idDiscucao;
    var voto = req.body.voto;

    if (usuario == undefined || usuario == '') {

        res.status(400).send('Você não fez login!');

    } else {

        votacaoModel.autenticar(usuario, discucao)
            .then(

                function (resultadoAutenticar) {

                    if (resultadoAutenticar.length > 0) {

                        res.status(400).send('Você ja votou nessa discussçao!')

                    } else {

                        votacaoModel.votar(usuario, discucao, voto)
                            .then(

                                res.send('voto efetuado com sucesso')

                            )

                    }

                }

            )

    }

}

function gerarGrafico(req,res){

    var discucao = req.body.idDiscucao;

    votacaoModel.gerarGrafico(discucao)
        .then(

            function(resultado){

                res.json(resultado);

            }

        )

}

module.exports = {

    votar,
    gerarGrafico
}