var database = require("../database/config");

function comentar(discucao,usuario,texto){

    console.log('b');

    var instrucaoSql = `
        insert into comentario (fkUsuario,fkDiscucao,texto) values (${usuario},${discucao},'${texto}');
    `;
    return database.executar(instrucaoSql);

}

function exibirComentarios(discucao){

    var instrucaoSql = `
        select u.nome as nome,
        c.texto as texto
        from comentario as c join usuario as u
        on u.idUsuario = c.fkUsuario
        join discucao as d
        on d.idDiscucao = c.fkDiscucao
        where c.fkDiscucao = ${discucao}
        order by c.idComentario asc;
    `;
    return database.executar(instrucaoSql);

}

module.exports = {
    comentar,
    exibirComentarios
};