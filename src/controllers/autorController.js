import { autores } from "../models/Autor.js";


class AutorController {
    static async listarAutores(req, res) {
        try{
            const listaAutores = await autores.find({});
        res.status(200).json(listaAutores);
        } catch(erro){
            res.status(500).json({message: `${erro.message} - falha na requisição`})
        }
    };

    static async listarAutorPorId(req, res) {
        try{
            const id = req.params.id;
            const autorEncontrado = await autores.findById(id);
            res.status(200).json(autorEncontrado);
        } catch(erro){
            res.status(500).json({message: `${erro.message} - falha na requisição do autor`})
        }
    }

    static async cadastrarAutor(req, res) {
        try {
            const novoAutor = await autores.create(req.body);
            res.status(201).json({message: "Autor cadastrado com sucesso", autor: novoAutor});
        } catch(erro) {
            res.status(500).json({message: `${erro.message} - falha ao cadastrar autor`});
        }
    };

    static async atualizarAutor(req, res) {
        try{
            const id = req.params.id;
            await autores.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Autor atualizado com sucesso"});
        } catch(erro){
            res.status(500).json({message: `${erro.message} - falha na atualização do autor`})
        }
    };

    static async excluirAutor(req, res) {
        try{
            const id = req.params.id;
            await autores.findByIdAndDelete(id);
            res.status(200).json({message: "Autor excluído com sucesso"});
        } catch(erro){
            res.status(500).json({message: `${erro.message} - falha na exclusão do autor`})
        }
    };
}

export default AutorController;