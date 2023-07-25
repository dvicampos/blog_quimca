//arreglo con respuestas correctas
let correctas = [1,3,2,1,1]

//arreglo guarda respuestas de usuarios
let opcion_elegida =[]

let cantidad_correctas=0

//funcion que toma el num de pregunta
function respuesta(num_pregunta, seleccionado){
    //guardar la respuesta elegida
    opcion_elegida[num_pregunta] = seleccionado.value

    //siguientes opciones de colores
    id="p"+num_pregunta

    labels = document.getElementById(id).childNodes
    labels[3].style.backgroundColor="white"
    labels[5].style.backgroundColor="white"
    labels[7].style.backgroundColor="white"

    //color lables seleccionados
    seleccionado.parentNode.style.backgroundColor = "#cec0fc"

}
//funcion compara arreglos
function corregir() {
    cantidad_correctas = 0
    for (let i = 0; i < correctas.length; i++) {
        if (correctas[i]==opcion_elegida[i]) {
            cantidad_correctas++
        }
    }
    document.getElementById("resultado").innerHTML = cantidad_correctas
}