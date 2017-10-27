function limpar(){
	document.getElementById("valor").value = "";
	//
	document.getElementById("dolar").value = "";
	document.getElementById("euro").value = "";
	document.getElementById("resultado").value = "";
	
}
function limpar1(){
	document.getElementById("valor1").value = "";
	document.getElementById("valor2").value = "";
	document.getElementById("resultado1").value = "";
}
function limpar2(){
	document.getElementById("valor3").value = "";
	document.getElementById("resultado2").value = "";
}
function limpar3(){
	document.getElementById("conversor-bases").value = "";
	document.getElementById("resultado3").value = "";
}
// 1 operador

function conversor(){
	
	var valor = parseInt(document.getElementById("valor3").value);

	if (document.getElementById("fatorial").checked) {	

	var total = 1;

	for (var i = 2; i <= valor; i++) {

		total = total*i;

	}
	
	}else if (document.getElementById("quadrado").checked) {

		var total = Math.pow(valor, 2);

	}else if (document.getElementById("cubo").checked) {

		var total = Math.pow(valor, 3);

	}else if (document.getElementById("raiz").checked) {

		var total = Math.sqrt(valor); 

	}else if (document.getElementById("seno").checked) {

		var total = Math.asin(valor);

	}else if (document.getElementById("meio").checked) {

		var total = 1 / valor;

	}
	document.getElementById("resultado2").value = total;
}

function conversor_moedas(){

var valor = parseFloat(document.getElementById("valor").value);
var dolar = parseFloat(document.getElementById("dolar").value);
var euro = parseFloat(document.getElementById("euro").value);

	if (document.getElementById("real-dolar").checked) {
		var total = valor/dolar;
	}else if(document.getElementById("real-euro").checked){
		var total = valor/euro;
	}else if (document.getElementById("dolar-real").checked) {
		var total = valor*dolar;
	}else if (document.getElementById("euro-real").checked) {
		var total = valor*euro;
}
document.getElementById("resultado").value = total.toFixed(2);
}


function conversor_bases(){
	var valor = parseInt(document.getElementById("conversor-bases").value);

	if (document.getElementById("dec-bin").checked) {

		function decbin(valor){
			var bin = "";

			while(valor > 0){
				bin = valor%2 + bin;
				valor = Math.floor(valor/2)
			}
			return bin;
		}
		total = decbin(valor);

	}else if (document.getElementById("dec-hex").checked) {

		var decimal = valor;
		 
		// converte em hexadecimal
		var total = decimal.toString(16);
		 
		//alert(hexadecimal);

	}else if (document.getElementById("bin-dec").checked) {

		var valor1 = document.getElementById("conversor-bases").value;

		function bindec(valor1){
			var decimal = 0;

			for (var i = valor1.length - 1; i >= 0; i--) {
				decimal += parseInt(valor1[i])*Math.pow(2,valor1.length-1-i);
			}

			return decimal;
		}

		total = bindec(valor1);

	}else if (document.getElementById("hex-dec").checked) {

	}

	document.getElementById("resultado3").value = total;

}

function dois_operandos(){

	var valor1 = parseInt(document.getElementById("valor1").value);
	var valor2 = parseInt(document.getElementById("valor2").value);

	if (document.getElementById("somar").selected) {

		var resultado = valor1 + valor2;
	}else if (document.getElementById("subtrair").selected) {

		var resultado = valor1 - valor2;
	}else if (document.getElementById("multiplicar").selected) {

		var resultado = valor1 * valor2;
	}else if (document.getElementById("dividir").selected) {

		var resultado = valor1 / valor2;
	}

	document.getElementById("resultado1").value = resultado;
}

// function testando(){
// 	var valor2 = parseInt(document.getElementById("valor2").value);
// 	//var r = parseInt(document.getElementById("testvalor").value);
// 	alert(valor2);
// }
