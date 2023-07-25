import {Router} from 'express'
const router = Router()

//RUTAS
router.get('/', (req,res) => res.render('pages/index', {title: "Sitio web quimica", x: 30}))

router.get('/about', (req,res) => res.render('pages/about', {title: "About me"}))
router.get('/dudas', (req,res) => res.render('pages/dudas', {title: "Dudas"}))

router.get('/contact', (req,res) => res.render('pages/contact', {title: "Contact me"}))

router.get('/juegos', (req,res) => res.render('pages/juegos', {title: "Juegos"}))
router.get('/ahorcado', (req,res) => res.render('pages/ahorcado', {title: "Ahorcado"}))
router.get('/quiz', (req,res) => res.render('pages/quiz', {title: "Quiz"}))
router.get('/quizb1', (req,res) => res.render('pages/quizb1', {title: "Quiz"}))
router.get('/quizb2', (req,res) => res.render('pages/quizb2', {title: "Quiz"}))
router.get('/quizb3', (req,res) => res.render('pages/quizb3', {title: "Quiz"}))
router.get('/quizb4', (req,res) => res.render('pages/quizb4', {title: "Quiz"}))
router.get('/quizb5', (req,res) => res.render('pages/quizb5', {title: "Quiz"}))




router.get('/memoria', (req,res) => res.render('pages/memoria', {title: "Memoria"}))

router.get('/documentos', (req,res) => res.render('pages/documentos', {title: "Documentos"}))

router.get('/videos', (req,res) => res.render('pages/videos', {title: "Videos"}))
router.get('/blog', (req,res) => res.render('pages/blog', {title: "Blog"}))
router.get('/login', (req,res) => res.render('pages/login'))
// router.get('/publicaciones', (req,res) => res.render('../public/controllers/publicacion.controller.js'))
// router.get('/login', (req,res) => res.render('pages/login'))
router.get('/register', (req,res) => res.render('pages/error'))
export default router