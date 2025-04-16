var memoria = "";
var caixaTexto = document.getElementById('resultado');
function guardarValor (valor){
	memoria += valor;
caixaTexto.value = memoria;
}
