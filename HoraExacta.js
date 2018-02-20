	function Hora(){
	var fechaHora = new Date();
	var horas = fechaHora.getHours();
	var minutos = fechaHora.getMinutes();
	var segundos = fechaHora.getSeconds();
  	var reloj = document.getElementById("reloj"); 
 
	if(horas < 10) { horas = '0' + horas; }
	if(minutos < 10) { minutos = '0' + minutos; }
	if(segundos < 10) { segundos = '0' + segundos; }
 
	reloj.innerHTML = horas+':'+minutos+':'+segundos;
 	
}
 	setInterval(Hora,1000);