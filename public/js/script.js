// Crear variables que contengan todo lo de los contendores del html
// Creamos las variables
var palabrascorrectas = 0
// Contenedor de palabras
const ContenedorPalabras = document.getElementById('wordContainer');
// Contenedor de boton iniciar
const startButton = document.getElementById('startButton');
// Contenedor de palabras del usuarios
const PalabrasUsuarioElement = document.getElementById('usedLetters');
// Obetenemos el canvas
const canvas = document.getElementById('canvas');
// Inicializamos canvas
let ctx = canvas.getContext('2d');
// Establecemos Ancho y Alto del canvas
ctx.canvas.width = 0;
ctx.canvas.heiht = 0;
// Dibujo del muñequito ahorcado

const bodyParts = [
    [4,2,1,1],
    [4,3,1,2],
    [3,5,1,1],
    [5,5,1,1],
    [3,3,1,1],
    [5,3,1,1]
];
// Variables del juego

// Selecciona la palabra del archivo palabras.js
let PalabraSeleccionada;
// Guardar la palabra hecha por el usuario
let PalabrasUsuario;
// Errores del usuario
let Errores;
// Aciertos del usuario
let Aciertos;

// Funcion para añadir palabras
const addPalabra = Palabra => {
    // Crear un elemento span
    const PalabraElement = document.createElement('span');
    // Convertir en mayusculas
    PalabraElement.innerHTML = Palabra.toUpperCase();
    // Agregar la palabra al nuevo elemento creado
    PalabrasUsuarioElement.appendChild(PalabraElement);
}
// Funcion para añadir partes del muñequito
const addBodyPart = bodyPart => {
    // Establecer un color al muñeco
    ctx.fillStyle = '#fff';
    // Dibujamos con fillrect el muñequito
    ctx.fillRect(...bodyPart)
}
// Funcion para palabras incorrectas
const wrongPalabra = () =>{
    // Agregar un bodypart para generar a la persina de ahorcado
    addBodyPart(bodyParts[Errores]);
    // Sumamos los errores
    Errores++;
    // Verificar si los errores son igual a las partes del muñequito
    if(Errores === bodyParts.length)endGame();
    console.log("Numero de errores", Errores)
    if(Errores==6){
        alert("Que mal usted perdio le juego, intentelo de nuevo")
        console.log("Perdio")
    }
}
// Funcion de Finalizacion de videojuego
const endGame = () =>{
    // Eliminaremso todos los eventos de la teclas
    document.removeEventListener('keydown',PalabraEvent);
    // Ejecutamos el boton de inicio
    startButton.style.display = 'block';
};
// Funcion para  la palabra correcta
const correctPalabra = Palabra => {
    // Obtenemos todos los span
    const {children} = ContenedorPalabras;
    // Iteramos cada letra que se esta obteniendo
    for(let i = 0; i < children.length; i++){
        // Sacamos de la clase hiden la letra que ingreso el usuario
        if(children[i].innerHTML === Palabra){
        children[i].classList.toggle('hidden');
        Aciertos++; 
            if(Aciertos==children.length){
                alert("FELICIADES USTED GANO EL JUEGO")
                console.log("gano")
                palabrascorrectas = palabrascorrectas + 1
                console.log(palabrascorrectas)
                let puntaje = document.getElementById("puntaje")
                document.getElementById("puntaje").innerHTML = palabrascorrectas
            }
        }
    }
    if(Aciertos === PalabraSeleccionada.length)endGame();
}
// Funcion para ingresar  la palabra del usuario
const PalabraInput = Palabra => {
    // Evaluamos los valores que se tratan de adivinar
    if (PalabraSeleccionada.includes(Palabra)){
        correctPalabra(Palabra)
    }
    else{
        // Llamamos a una funcion la cual me dira si la palabra es incorrecta
        wrongPalabra()
    }
    // Agregamos la letra que ingrese el usuario
    addPalabra(Palabra)
    // Agregar la palabra establecida en la funcion
    PalabrasUsuario.push(Palabra)
}
// Funcion para evaluar la gramatica del usuario
const PalabraEvent = event => {
    // Recoger la palabra y convertirla en mayuscula
    let newPalabra = event.key.toUpperCase();
    // Evaluar si esa palabra cumple ciertos requerimientos
    if(newPalabra.match(/^[a-zñ]$/i) && !PalabrasUsuario.includes(newPalabra)){
        PalabraInput(newPalabra)
    }
};
// Funcion para dibujar la palabra
const drawWord = () =>{
    // Seleccionamos la palabra 
    PalabraSeleccionada.forEach(Palabra => {
        // Creamos un elemento de tipo span
        const PalabraElement = document.createElement('span');
        // Guardamos la palabra en mayuscula
        PalabraElement.innerHTML = Palabra.toUpperCase();
        // Añadimos clases a los nuevos elementos
        PalabraElement.classList.add('letter');
        PalabraElement.classList.add('hidden');
        // Asignamos la letra en el contenedor de palabras
        ContenedorPalabras.appendChild(PalabraElement)
        
    });
};
// Funcion para escoger palabra random :D
const selectRandomWord = () => {
    // Crear variable que me guarde la palabra
    let palabra = words[Math.floor((Math.random()* words.length))].toUpperCase();
    // Aplicamos la separacion de caracteres
    PalabraSeleccionada = palabra.split('');
    console.log(palabra)
    if(palabra == 'HIDROGENO'){
        document.getElementById('ejemplo').innerHTML = "Es el primer elemento de la tabla periódica"
    }else if (palabra == 'HELIO') {
        document.getElementById('ejemplo').innerHTML = "Es un gas incoloro, inodoro e insípido"
    }else if (palabra == 'LITIO') {
        document.getElementById('ejemplo').innerHTML = "Elemento metálico, blanco plateado, químicamente reactivo, el más ligero en peso de todos los metales, y de bajo punto de fusión."
    }else if(palabra == 'BERILIO'){
        document.getElementById('ejemplo').innerHTML = "Es un elemento químico de símbolo Be y número atómico 4"
    }else if(palabra == 'CARBONO'){
        document.getElementById('ejemplo').innerHTML = "Es la base de la vida en la Tierra, necesario para formar moléculas complejas como proteínas y ADN"
    }else if(palabra == 'NITROGENO'){
        document.getElementById('ejemplo').innerHTML = "No es reactivo y es excelente para recubrimientos y a menudo se usa como gas de purga."
    }else if(palabra == 'OXIGENO'){
        document.getElementById('ejemplo').innerHTML = "Gas sin color ni olor"
    }else if(palabra == 'FLUOR'){
        document.getElementById('ejemplo').innerHTML = "Es un mineral que ocurre de forma natural en el suelo, el agua y el aire"
    }else if(palabra == 'NEON'){
        document.getElementById('ejemplo').innerHTML = "Se utiliza como refrigerante para la creación de imágenes infrarrojas ultra-sensibles, así como equipos de detección"
    }else if(palabra == 'SODIO'){
        document.getElementById('ejemplo').innerHTML = "Es un mineral, y uno de los elementos químicos que componen la sal"
    }else if(palabra == 'MAGNECIO'){
        document.getElementById('ejemplo').innerHTML = "Es necesario para más de 300 reacciones bioquímicas en el cuerpo."
    }else if(palabra == 'ALUMINIO'){
        document.getElementById('ejemplo').innerHTML = "Es un metal liviano de color blanco-plateado."
    }else if(palabra == 'SILICIO'){
        document.getElementById('ejemplo').innerHTML = "Se extrae del cuarzo y otros minerales y es el segundo elemento más abundante en la Tierra después del oxígeno."
    }else if(palabra == 'FOSFORO'){
        document.getElementById('ejemplo').innerHTML = "Es un mineral que se encuentra en cada un de las células de nuestro organismo."
    }else if(palabra == 'AZUFRE'){
        document.getElementById('ejemplo').innerHTML = "Es un elemento químico con número atómico 16 y de símbolo S"
    }else if(palabra == 'CLORO'){
        document.getElementById('ejemplo').innerHTML = "Es un elemento químico de número atómico 17 situado en el grupo de los halógenos (grupo VIIA) de la tabla periódica de los elementos."
    }else if(palabra == 'ARGON'){
        document.getElementById('ejemplo').innerHTML = "Es un elemento químico de número atómico 18 y símbolo Ar."
    }else if(palabra == 'POTASIO'){
        document.getElementById('ejemplo').innerHTML = "Es un mineral que se encuentra en muchos alimentos"
    }else if(palabra == 'CALCIO'){
        document.getElementById('ejemplo').innerHTML = "Es un mineral que el cuerpo necesita para formar y mantener huesos fuertes y llevar a cabo muchas funciones importantes."
    }
};


// Funcion para dibujar al ahorcado
const DrawHangMan = ()=>{
    // Dimensiones al ahorcado

    // Alto
    ctx.canvas.width = 120;
    // Ancho
    ctx.canvas.height = 160;
    // Tamaño de pixeles
    ctx.scale(20,20)
    // Borramos todo lo que se encuentre en si dibujado
    ctx.clearRect(0,0, canvas.width, canvas.height)
    // Empezamos a dibujar al hombrecito
    ctx.fillStyle = '#21BB50';
    // Posicionamos el muñeco segun las coordenadas

    ctx.fillRect(0, 7, 4 ,1);
    ctx.fillRect(1, 0, 1, 8);
    ctx.fillRect(2, 0, 3, 1);
    ctx.fillRect(4, 1, 1, 1);
};
// Funcion para inicializar videojuego
const IniciodeVideojuego = ()=>{
    // Reseteamos todas las variables
    
    // Reseteamos palabras de usuario
    PalabrasUsuario = [];
    // Reseteamos los errores del usuario
    Errores = 0;
    // Reseteamos lo que son los aciertos
    Aciertos =  0;
    // Reseteamos contenedor de palabra
    ContenedorPalabras.innerHTML = '';
    // Reseteamos el contenedor de las letras
    PalabrasUsuarioElement.innerHTML = '';
    // Escondemos el boton de Start o inicio
    startButton.style.display = 'none'
    // DrawHangMan
    DrawHangMan();
    selectRandomWord()
    drawWord()
    // Cuando el usuario presione una tecla cualquiera se ejecutara una funcion
    document.addEventListener('keydown',PalabraEvent)
}


// Evento para iniciar el juego
startButton.addEventListener('click',IniciodeVideojuego)