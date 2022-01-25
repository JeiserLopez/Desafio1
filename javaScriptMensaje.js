

function validarTexto(texto) {
    texto.value = texto.value.toLowerCase();
    var letras = /^+$/;
    if (!texto.value.match(letras))
    {
      alert("Solo se admiten letras");
      texto.value = "";
      return false;
    }
}
