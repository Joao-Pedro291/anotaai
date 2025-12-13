import Anotacao from "../models/anotacaoModel.js";

async function get(req, res) {
  try {
    const anotacoes = await Anotacao.findAll();
    return res.status(200).json(anotacoes);
  } catch (error) {
    return res.status(500).json({ errorMessage: error });
  }
}

function getById(req, res) {
  const { id } = req.params;

  try {
    const anotacaoBuscada = getByInternId();

    if (!anotacaoBuscada) {
      return res.status(404).json({ mensagem: "Anotação nao encontrada" });
    }

    res.status(200).json(anotacaoBuscada);
  } catch (error) {
    res.status(500).json({ mensagem: "Erro inesperado", error });
  }
}

async function post(req, res) {
  const { descricao, data_criacao, id_usuario } = req.body;

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

    res
      .status(201)
      .json({ mensagem: "Anotação criada com sucesso", anotacaoCriada });
  } catch (error) {
    res.status(500).json({ mensagem: "Erro inesperado", error });
  }
}

async function put(req, res) {
  const { id } = req.params;

  const { descricao, finalizada } = req.body;
  let propEscolhida = {};

  try {
    const anotacaoBuscada = await getByInternId(id);

    if (!anotacaoBuscada) {
      return res.status(404).json({
        errorMessage: "Esta anotação não existe na nossa base de dados",
      });
    }

    if (descricao != undefined) {
      propEscolhida.descricao = descricao;
    } else if (finalizada != undefined) {
      propEscolhida.finalizada = finalizada;
    }

    await anotacaoBuscada.update(propEscolhida);

    return res.status(200).json({
      errorMessage: "Anotação atualizada com sucesso",
      anotacaoBuscada,
    });
  } catch (error) {
    res.status(500).json({
      errorMessage:
        "Erro inesperado, infelizmente não foi possível atualizar a anotação",
      error,
    });
  }
}

async function remove(req, res) {
  const { id } = req.params;

  try {
    const anotacaoBuscada = await getByInternId(id);

    if (!anotacaoBuscada) {
      res.json({ errorMessage: "Nao foi possivel deletar essa anotacao" });
    }

    await anotacaoBuscada.destroy({
      where: { id_anotacao: id },
    });

    res.status(200).json({ errorMessage: "Anotação excluída com sucesso" });
  } catch (error) {
    res
      .status(500)
      .json({
        errorMessage:
          "Erro inesperado, fale com um dos nossos administradores ",
      });
  }
}

async function getByInternId(id) {
  try {
    const anotacoes = await Anotacao.findByPk(id);
    return anotacoes;
  } catch (error) {
    return id.status(500).json({ errorMessage: error });
  }
}

export default { get, getById, post, put, remove };
