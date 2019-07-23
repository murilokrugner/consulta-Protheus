import Sc7010 from '../models/Sc7010';

class Sc7010Controller {
  async index(req, res) {
    const registros = await Sc7010.findAll({
      attributes: ['c7_num'],
    });

    return res.json(registros);
  }
}

export default new Sc7010Controller();
