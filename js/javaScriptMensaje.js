

function validarTexto(texto,e) {
    texto.value = texto.value.toLowerCase();
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 8) {
        return true;
    }

    patron = /[A-Za-z ]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}

function encriptarTexto(texto){
  if (texto == "")
  {
    alert("Por favor introduzca un texto");
  }
  else{
   let arregloTexto = [];
   for(let i of texto) {
      arregloTexto.push(i);
   }
   for (var i = 0; i <= arregloTexto.length; i++)
   {
     switch (arregloTexto[i]) {
       case "e":
         arregloTexto[i] = "enter";
         break;
       case "i":
         arregloTexto[i] = "imes";
         break;
       case "a":
         arregloTexto[i] = "ai";
         break;
       case "o":
         arregloTexto[i] = "ober";
         break;
       case "u":
         arregloTexto[i] = "ufat";
         break;
       default:
     }
     
   }

    textResuelto.value = arregloTexto.join('');
  }
  
}


function borrarTexto(campo){
  if (campo == 1){
    textCodi.value = "";
  }
  else
   {
     textResuelto.value = "";
   }
  
}

function copiarTexto(){
  var contenido = document.getElementById('textResuelto');
  contenido.select();
  document.execCommand('copy');
}


function decodificarTexto(texto){
   var cadena;
   let cadenaNew = texto.replace(/enter/g,"e");
   cadenaNew = cadenaNew.replace(/imes/g,"i");
   cadenaNew = cadenaNew.replace(/ai/g,"a");
   cadenaNew = cadenaNew.replace(/ober/g,"o");
   cadenaNew = cadenaNew.replace(/ufat/g,"u");
   textResuelto.value = cadenaNew;
}
  
  
