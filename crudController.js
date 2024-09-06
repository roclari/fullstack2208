const Crud = require('../models/crud');

exports.getAllCruds = async (req, res) => {
    try {
        const cruds = await Crud.findAll({ attributes: ['id', 'username', 'email'] });
        res.status(200).json(cruds);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao listar' });
    }
};

exports.updateCrud = async (req, res) => {
    const { username, email } = req.body;
    try {
        const crud = await Crud.findByPk(req.userId);
        if (crud) {
            crud.username = username;
            crud.email = email;
            await crud.save();
            res.status(200).json({ message: 'Cadastro atualizado com sucesso' });
        } else {
            res.status(404).json({ error: 'Cadastro não encontrado' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Erro ao atualizar cadastro' });
    }
};

exports.deleteCrud = async (req, res) => {
    try {
        const crud = await Crud.findByPk(req.userId);
        if (crud) {
            await crud.destroy();
            res.status(200).json({ message: 'Cadastro deletado com sucesso' });
        } else {
            res.status(404).json({ error: 'Cadastro não encontrado' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Erro ao deletar cadastro' });
    }
};
