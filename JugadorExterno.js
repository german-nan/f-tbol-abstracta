//var mensaje = "Sólo podrás \'inscribirte\' al partido\n de los viernes si sos miembro del\n \"Chievo Rachera F.C\", o un invitado \"selecto de algun compañero";

//alert(mensaje)

//var N1 = 2
//var N2 = 5

//if N






//alert("El resultado es: "+ N3);


//var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];

//alert(meses[3]) 



//------------------------------------------------------------------------------



//var valores = [true, 30, false, "hola", "adios", 60];
//var resultado

//resultado = valores[3] > valores[4] 
//alert(resultado)

//result = valores[0] || valores[2]
//alert(result)

//resultado = valores[0] && valores[2]
//alert(resultado)

//resultado = valores[1] / valores[5]
//alert("El resultado de dividir " +valores[1] +" entre " +valores[5] +" es: " +resultado)

//resultado = valores[1] * valores[5]
//alert("El resultado de multiplicar " +valores[1] +" por " +valores[5] +" es: " +resultado)

//resultado = valores[1] + valores[5]
//alert("El resultado de sumar " +valores[1] +" mas " +valores[5] +" es: " +resultado)

//resultado = valores[1] - valores[5]
//alert("El resultado de restar " +valores[1] +" entre " +valores[5] +" es: " +resultado)

//resultado = valores[1] % valores[5]
//alert("El resultado del módulo de " +valores[1] +" entre " +valores[5] +" es: " +resultado)


//---------------------------------------------------------------------------------------

//var numero1 = 5;
//var numero2 = 8;
 
//if(numero1 < numero2) {
//  alert("numero1 no es mayor que numero2");
//}

//if(numero2 > 0) {
//  alert("numero2 es positivo");
//}

//if(numero1 < 0 || numero1 != 0) {
//  alert("numero1 es negativo o distinto de cero");
//}

//if(numero1++ <= numero2) {
//  alert("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
//}


//-------------------------------------------------------------------------------------------


//var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
//var dni
//var letradni
//var resto

//dni = prompt("Ingrese su DNI sin puntos ni guiones")
//alert(dni)

//letradni = prompt("Ahora ingrese la letra de su DNI")
//alert(letradni)


//if (dni < 0 || dni > 99999999) {
//	alert("El numero ingresado no es valido"); 
//	}	
//else {
//	resto = dni % 23 
//	}

//if (letradni == letras[resto]) {
//	alert("La letra ingresada corresponde con el DNI")
//	}
//else {
//	alert("La letra ingresada no corresponde al DNI")
//}
 
//--------------------------------------------------------------------------------------------------


//var mensaje = "Uruguay nomá"
//var cuentacaracteres = mensaje.length; //Cuenta cantidad de caracteres de un texto
//alert(cuentacaracteres)

//-----------------------------------------------------------------------------------------

//var mensaje = "Uruguay nomá"
//var mayusculas = mensaje.toUpperCase(); //Texto es mayúscula
//alert(mayusculas)

//-----------------------------------------------------------

//var mensaje = "Uruguay nomá"
//var mayusculas = mensaje.toLowerCase(); //Texto en minúscula
//alert(mayusculas)

//----------------------------------------------------------------------------------------

// function PedirNumero() {
// 	numero = prompt("Ingrese un numero: ")

// 	ParOImpar(numero);
// }

//function ParOImpar(numero) {
//	if (numero % 2 == 0){
//		alert("El numero ingresado es par")
//	}	
//	else {
//	alert("El numero ingresado es impar")	
//	}
//}
//PedirNumero();

//ParOImpar(8);

//dni = prompt("Ingrese su DNI sin puntos ni guiones")
//alert(dni)

//---------------------------------------------------------------------------


var fechaHora = new Date();
var horas = fechaHora.getHours();
var minutos = fechaHora.getMinutes();
var segundos = fechaHora.getSeconds();
 
if(horas < 10) { horas = '0' + horas; }
if(minutos < 10) { minutos = '0' + minutos; }
if(segundos < 10) { segundos = '0' + segundos; }
 
document.getElementById("reloj").innerHTML = horas+':'+minutos+':'+segundos;
 
<div id="reloj" />