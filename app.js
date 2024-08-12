

const mensajeIngresado = document.getElementById('mensaje');
const resultado = document.getElementById('resultadoEncriptado');

function encriptarMensaje(){
  const textoEncriptado = encriptar(mensajeIngresado.value)
  const p1 = document.getElementById('p1');
  const p2 = document.getElementById('p2');
  const botonCopiar = document.getElementById('copiar');
  resultado.value = textoEncriptado;
  mensajeIngresado.value = "";
  resultado.style.backgroundImage ="none";
  p1.style.display ="none";
  p2.style.display ="none";
  botonCopiar.style.display="block";
}

function encriptar(entradaEncriptado){
    let matrizCodigo=[["e", "enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]]
    entradaEncriptado = entradaEncriptado.toLowerCase();
    
    for (let i = 0; i < matrizCodigo.length; i++){
      if (entradaEncriptado.includes(matrizCodigo[i][0])) {
        entradaEncriptado = entradaEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
      }
    }
    return entradaEncriptado
}

function desencriptar(entradaDesencriptado){
  let matrizCodigo=[["e", "enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]]
  entradaDesencriptado = entradaDesencriptado.toLowerCase();
  
  for (let i = 0; i < matrizCodigo.length; i++){
    if (entradaDesencriptado.includes(matrizCodigo[i][1])) {
      entradaDesencriptado = entradaDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
    }
  }
  return entradaDesencriptado

}

function desencriptarMensaje(){
  const textoEncriptado = desencriptar(mensajeIngresado.value)
  const p1 = document.getElementById('p1');
  const p2 = document.getElementById('p2');
  const botonCopiar = document.getElementById('copiar');
  resultado.value = textoEncriptado;
  resultado.style.backgroundImage ="none";
  p1.style.display ="none";
  p2.style.display ="none";
  botonCopiar.style.display="block";
}

function copiar(){
  const texto = document.getElementById("resultadoEncriptado").value;
  navigator.clipboard.writeText(texto) 
  

 }

 document.getElementById('copiar').addEventListener('click', function() {
  var texto = document.getElementById('resultadoEncriptado');
  texto.classList.toggle('resaltado');
});