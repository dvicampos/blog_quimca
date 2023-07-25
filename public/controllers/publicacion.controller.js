import Publicaciones from '../models/publicacion.model.js'

const Publicacion = {
  list: async (req, res) => {
    const publicaciones = await Publicaciones.find();
    res.status(200).send(publicaciones);
  },

  create: async (req, res) => {
    const Publicacion = new Publicaciones(req.body);
    await Publicacion.save();
    res.status(201).send('creado!');
  },

  update: async (req, res) => {
    res.status(204).send('actualizar');
  },

  destroy: async (req, res) => {
    const { id } = req.params;
    const Publicacion = await Publicaciones.findOne({ _id: id });
    await Publicacion.remove();
    res.status(204).send('eliminando');
  }
}

export default Publicacion