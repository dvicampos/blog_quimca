import express from 'express'
import ejs from 'ejs'
import {dirname, join} from 'path'
import { fileURLToPath } from 'url'

//LEGEND
import indexRoutes from './routes/index.js'
const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))
app.set('views/pages', join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(indexRoutes)
app.use(express.static(join(__dirname, 'public')))

//Login
import mongoose from 'mongoose';
mongoose.connect('mongodb+srv://dacam:ArNo0192@cluster0.qhe9clm.mongodb.net/auth?retryWrites=true&w=majority');
import Publicacion from './public/controllers/publicacion.controller.js';
import { Auth, isAuthenticated } from './public/controllers/auth.controller.js';
app.use(express.json())
app.use(express.static('js'))
app.get('/publicaciones', Publicacion.list, Publicacion.list)
app.post('/publicaciones', Publicacion.create)
app.put('/publicaciones/:id', isAuthenticated, Publicacion.update)
app.patch('/publicaciones/:id', isAuthenticated, Publicacion.update)
app.delete('/publicaciones/:id', isAuthenticated, Publicacion.destroy)
app.post('/login', Auth.login);
app.post('/register', Auth.register);

//npm run dev
app.listen(3000)
console.log('server listening on port', 3000)