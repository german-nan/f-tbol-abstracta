<?php require_once('conexion.php'); ?>

<?php

if (isset($_POST['nombre']) && ($_POST['contrasena']))(

	$nombre = $_POST['nombre'];
	$contrasena = $_POST['contrasena'];

	$insert = sprintf("INSERT INTO usuarios (nombre,contrasena) VALUES ('".$nombre."','".$contrasena."')");
	mysql_select_db($bd,$conexion);

	$resultado = mysql_query($insert,$conexion)or die(mysql_error());

)
?>

<?php 
 
if (isset($_POST['nombre']) && ($_POST['email']) && ($_POST['contrasena']))(

	$nombre = $_POST['nombre'];
	$email = $_POST['email'];
	$contrasena = $_POST['contrasena'];

	$insert = sprintf("INSERT INTO usuarios (nombre,email,contrasena) VALUES ('".$nombre."','".$email."','".$contrasena."')");
	mysql_select_db($bd,$conexion);

	$resultado = mysql_query($insert,$conexion)or die(mysql_error());

	echo "Tu registro se ha cargado correctamente";
)
?>
