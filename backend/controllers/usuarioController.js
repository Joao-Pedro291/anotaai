// controllers/usuarioController.js
import Usuario from "../models/usuarioModel.js";

async function get(req, res) {
  try {
    const usuarios = await Usuario.findAll();
    return res.status(200).json(usuarios);
  } catch (error) {
    return res
      .status(500)
      .json({ mensagem: "Erro ao listar usuários", detalhe: error.message });
  }
}

async function getById(req, res) {
  const { id } = req.params;

  try {
    const usuarioBuscado = await getByInternId(id);

    if (!usuarioBuscado) {
      return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }

    return res.status(200).json(usuarioBuscado);
  } catch (error) {
    return res.status(500).json({
      mensagem: "Erro inesperado ao buscar usuário",
      detalhe: error.message,
    });
  }
}

async function post(req, res) {
  const { nome, email, senha, data_nasc } = req.body;

  // Validação mínima
  if (!nome || !email || !senha) {
    return res
      .status(400)
      .json({ mensagem: "Campos obrigatórios: nome, email, senha" });
  }

  try {
    const novoUsuario = { nome, email, senha, data_nasc };
    const usuarioCriado = await Usuario.create(novoUsuario);

    return res
      .status(201)
      .json({ mensagem: "Usuário criado com sucesso", usuario: usuarioCriado });
  } catch (error) {
    return res.status(500).json({
      mensagem: "Erro inesperado ao criar usuário",
      detalhe: error.message,
    });
  }
}

async function put(req, res) {
  const { id } = req.params;

  const { nome, email, senha, data_nasc } = req.body;
  let propEscolhida = {};

  try {
    const usuarioBuscado = await getByInternId(id);

    if (!usuarioBuscado) {
      return res.status(404).json({
        errorMessage: "Este usuário não existe na nossa base de dados",
      });
    }

    if (nome != undefined) {
      propEscolhida.nome = nome;
    } else if (email != undefined) {
      propEscolhida.email = email;
    } else if (senha != undefined) {
      propEscolhida.senha = senha;
    } else if (data_nasc != undefined) {
      propEscolhida.data_nasc = data_nasc;
    }

    await usuarioBuscado.update(propEscolhida);

    return res.status(200).json({
      errorMessage: "Usuário atualizado com sucesso",
      usuarioBuscado,
    });
  } catch (error) {
    res.status(500).json({
      errorMessage:
        "Erro inesperado, infelizmente não foi possível atualizar o usuário",
      error,
    });
  }
}

async function remove(req, res) {
  const { id } = req.params;

  try {
    const usuarioBuscado = await getByInternId(id);

    if (!usuarioBuscado) {
      return res.json({
        errorMessage: "Nao foi possivel deletar esse usuário",
      });
    }

    await usuarioBuscado.destroy({
      where: { id_anotacao: id },
    });

    res.status(200).json({ errorMessage: "Usuário excluído com sucesso" });
  } catch (error) {
    res.status(500).json({
      errorMessage: "Erro inesperado, fale com um dos nossos administradores ",
    });
  }
}

// Função utilitária interna
async function getByInternId(id) {
  try {
    const usuario = await Usuario.findByPk(id);
    return usuario; // objeto ou null
  } catch (error) {
    // Não temos res aqui; propagamos o erro
    throw error;
  }
}

// Se preferir default:
export default { get, getById, post, put, remove };
