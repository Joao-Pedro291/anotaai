import Anotacao from "../models/anotacaoModel.js";

async function get(req, res) {
  try {
    const anotacoes = await Anotacao.findAll();
  } catch (error) {
    return res.status(500).json({ errorMessage: error });
  }
}

function getById(req, res) {
  const { id } = req.params;

  try {
    const anotacaoBuscada = getByInternId;

    if (!anotacaoBuscada) {
      return res.status(404).json({ mensagem: "Anotação nao encontrada" });
    }

    res.status(200).json(anotacaoBuscada);
  } catch (error) {
    res.status(500).json({ mensagem: "Erro inesperado", error });
  }
}

async function post(req, res) {
  const { descricao, data_criacao } = req.body;

  try {
    let novaAnotacao = {
      descricao: descricao,
      data_criacao: data_criacao,
      finalizada: false,
    };

    if (id_usuario != undefined) {
      novaAnotacao.id_usuario = id_usuario;
    }

    const anotacaoCriada = await Anotacao.create(novaAnotacao);

    req
      .status(201)
      .json({ mensagem: "Anotação criada com sucesso", anotacaoCriada });
  } catch (error) {
    res.status(500).json({ mensagem: "Erro inesperado", error });
  }
}

function put(req, res) {}

function remove(req, res) {}

async function getByInternId(id) {
  try {
    const anotacoes = await Anotacao.findByPk(id);
    return anotacoes;
  } catch (error) {
    return id.status(500).json({ errorMessage: error });
  }
}

export default { get, getById, post, put, remove };
