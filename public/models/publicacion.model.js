import mongoose from 'mongoose';

const Publicaciones = mongoose.model('Publicacion', {
    nombre: { type: String, required: true, minLength: 3 },
    descripcion: { type: String, required: true, minLength: 3 },
});

export default Publicaciones;
