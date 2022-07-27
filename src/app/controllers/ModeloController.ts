import { Request, Response } from "express";

import { cadastrarMensagem } from "../services/CadastrarMensagem";
import { listarMensagens } from "../services/ListarMensagens";
import { deletarMensagem } from "../services/DeletarMensagem";
import { editarMensagem } from "../services/EditarMensagem";

class ModeloController {
  async cadastrar(req: Request, res: Response) {
    const { nome, mensagem } = req.body;
    cadastrarMensagem(nome, mensagem).then((data) => {
      return res.json(data);
    });
  }
  async listar(req: Request, res: Response) {
    listarMensagens().then((data) => {
      return res.json(data);
    });
  }
  async deletar(req: Request, res: Response) {
    const { id } = req.params;
    deletarMensagem(Number(id)).then((data) => {
      return res.json(data);
    });
  }
  async editar(req: Request, res: Response) {
    const { id } = req.params;
    const { nome, mensagem } = req.body;

    editarMensagem(Number(id), nome, mensagem).then((data) => {
      return res.json(data);
    });
  }
}

export default new ModeloController();
