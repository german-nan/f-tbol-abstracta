<!--Ejemplo del Tutorial de HTML-->
<!DOCTYPE html>
<html lang="es-ES">
	
	<head>
		<meta charset="utf-8">
		<title>Login</title>
		<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />

		<title>Logueate!</title>
		<!-- Bootstrap -->
   		 <link href="vendors/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    	<!-- Font Awesome -->
    	<link href="vendors/font-awesome/css/font-awesome.min.css" rel="stylesheet">
	    <!-- NProgress -->
	    <link href="vendors/nprogress/nprogress.css" rel="stylesheet">
	    <!-- Animate.css -->
	    <link href="vendors/animate.css/animate.min.css" rel="stylesheet">

	    <!-- Custom Theme Style -->
	    <link href="build/css/custom.min.css" rel="stylesheet">
	</head>


	<body class="login">
    <div>
      <a class="hiddenanchor" id="signup"></a>
      <a class="hiddenanchor" id="signin"></a>

      <div class="login_wrapper">
        <div class="animate form login_form">
          <section class="login_content">
            <form>
              <h1>Logueate!</h1>
              <div>
                <input type="text" class="form-control" placeholder="Nombre de Usuario" required="" />
              </div>
              <div>
                <input type="password" class="form-control" placeholder="Constraseña" required="" />
              </div>
              <div>
                <a class="btn btn-default submit" href="index.html">Log in</a>
                <a class="reset_pass" href="#">Olvidaste tu contraseña?</a>
              </div>

              <div class="clearfix"></div>

              <div class="separator">
                <p class="change_link">Aún no te has registrado?
                  <a href="#signup" class="to_register"> Crear Usuario </a>
                </p>

                <div class="clearfix"></div>
                <br />
              </div>
            </form>
          </section>
        </div>

        <div id="register" class="animate form registration_form">
          <section class="login_content">
            <form>
              <h1>Crear Usuario</h1>
              <div>
                <input type="text" class="form-control" placeholder="Nombre de Usuario" required="" />
              </div>
              <div>
                <input type="email" class="form-control" placeholder="Email" required="" />
              </div>
              <div>
                <input type="password" class="form-control" placeholder="Contraseña" required="" />
              </div>
              <div>
                <a class="btn btn-default submit" href="index.html">Crear</a>
              </div>

              <div class="clearfix"></div>

              <div class="separator">
                <p class="change_link">Ya estás registrado?
                  <a href="#signin" class="to_register"> Log in </a>
                </p>

                <div class="clearfix"></div>
                <br />
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  </body>

 </html>
	