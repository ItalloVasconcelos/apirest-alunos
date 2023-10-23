class Home {
  async index(req, res) {
    res.json('index');
  }
}

export default new Home();
