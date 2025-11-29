-- create database db_anotaai;

use db_anotaai;

create table tb_usuario(
	id_usuario int auto_increment primary key,
    nome varchar(255) not null,
    email varchar(255) not null,
    senha varchar(255) not null,
    data_nasc date
);

create table tb_anotacao(
	id_anotacao int auto_increment not null primary key,
	descricao varchar(255) not null,
    data_criacao date not null,
    data_finalizacao date not null,
    id_usuario int,
    foreign key (id_usuario) references tb_usuario(id_usuario)
);

INSERT INTO tb_usuario(nome, email, senha, data_nasc)
VALUES("Dalmasio", "dalmasio@email.com", "password", "1997-12-21");

INSERT INTO tb_anotacao(descricao, data_criacao, data_finalizacao, id_usuario)
VALUES("anotacao 3 dalmasio", "2025-10-18", "2025-11-18", 2);

select * from tb_anotacao;
select * from tb_usuario;

ALTER TABLE tb_usuario
ADD UNIQUE (email);

ALTER TABLE tb_anotacao
MODIFY COLUMN data_finalizacao date NULL;
