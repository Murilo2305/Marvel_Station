var database = require("../database/config");

function autenticar(usuario,discucao){

    var instrucaoSql = `
        SELECT fkUsuario, fkDiscucao FROM voto WHERE fkUsuario = '${usuario}' AND fkDiscucao = '${discucao}';
    `;
    return database.executar(instrucaoSql);

}

function votar(usuario,discucao,voto){

    var instrucaoSql = `
        insert into voto (fkUsuario,fkDiscucao,voto) values (${usuario},${discucao},${voto});
    `;

    return database.executar(instrucaoSql);

}

function gerarGrafico(discucao){

    var instrucaoSql = `
        select voto as 'Opcao', count(*) as total from voto where fkDiscucao = ${discucao} group by voto order by voto;
    `;
    return database.executar(instrucaoSql);


}

module.exports = {
    autenticar,
    votar,
    gerarGrafico
};