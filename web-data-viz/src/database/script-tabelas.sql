create database marvelStation;

use marvelStation;

create table usuario(
idUsuario in primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45)
);

create table discucuao(
idDiscucao int primary key auto_increment,
nome varchar(45),
dtInicio date
);

create table voto(
fkUsuario int,
fkDiscucao int,
voto int, 
constraint pkComposta
	primary key(fkDiscucao,fkUsuario),
constraint fkDiscucao
	foreign key (fkDiscucao)
	references discucuao(idDiscucao),
constraint fkUsuario
	foreign key (fkUsuario)
	references usuario(idUsuario)
);

create table comentario(
idComentario int auto_increment,
fkDiscucao int,
fkUsuario int,
texto varchar(1000),
constraint pkComposta
	primary key(idComentario,fkDiscucao,fkUsuario),
constraint fkDiscucao
	foreign key (fkDiscucao)
	references discucuao(idDiscucao),
constraint fkUsuario
	foreign key (fkUsuario)
	references usuario(idUsuario)
);