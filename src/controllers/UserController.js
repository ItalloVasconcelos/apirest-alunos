import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email });
    } catch (error) {
      return res.status(400).json(
        { errors: [`Erro no controller do usuário: ${error.errors.map((err) => err.message)}`] },
      );
    }
  }

  // TODO: Index
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(users);
    } catch (error) {
      return res.json(null);
    }
  }

  // TODO: Show
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      const { id, nome, email } = user;

      return res.json({ id, nome, email });
    } catch (error) {
      return res.status(400).json(
        { errors: [`Erro no controller do usuário: ${error.errors.map((err) => err.message)}`] },
      );
    }
  }

  // TODO: Update
  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe!'],
        });
      }

      const novosDados = await user.update(req.body);
      const { id, nome, email } = novosDados;
      return res.json({ id, nome, email });
    } catch (error) {
      return res.status(400).json(
        { errors: [`Erro no controller do usuário: ${error.errors.map((err) => err.message)}`] },
      );
    }
  }

  // TODO: Delete
  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe!'],
        });
      }

      await user.destroy(req.body);

      return res.json(
        ['Usuário deletado!'],
      );
    } catch (error) {
      return res.status(400).json(
        { errors: [`Erro no controller do usuário: ${error.errors.map((err) => err.message)}`] },
      );
    }
  }
}
export default new UserController();
