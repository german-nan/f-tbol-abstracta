<?php

	$bd = "ajax";
	$host = "localhost";
	$user = "root";
	$pass = "";

	$conexion = mysql_pconnect($host,$user,$pass) or trigger_error(mysql_error(),E_USER_ERROR);

?>