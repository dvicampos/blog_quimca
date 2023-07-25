const loadInitialTemplate = () => {
	const template = `

<form id="publicacion-form" class="container-sm">
	<h1>PUBLICACIONES</h1>
	<a href="/" id="Regresar" class="btn btn-info" role="button">Regresar</a>
	<button onclick="funsalir()" type="button" class="btn btn-warning">Cerrar sesion</button>

	<div class="mb-3">
		<label for="exampleInputEmail1" class="form-label">Nombre</label>
		<input name="nombre" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">

	</div>
	<div class="mb-3">
		<label for="exampleInputPassword1" class="form-label">Descripcion</label>
		<input name="descripcion" type="text" class="form-control" id="exampleInputPassword1">
	</div>
	<div class="mb-3 form-check">

	</div>
	<button type="submit" class="btn btn-primary">Enviar</button>
	</form>
</br>

<div class="container text-center">
	<div class="row g-2" id="imprimir-publicacion"> 
		
	</div>	
</div>
	`
	const body = document.getElementsByTagName('body')[0]
	body.innerHTML = template
}

const getPublicaciones = async () => {
	const response = await fetch('/publicaciones', {
		headers: {
			Authorization: localStorage.getItem('jwt')
		}
	})
	const publicaciones = await response.json()
	const template = publicacion => `
	<div class="col-6 card">
		<p class="p-3 card-text">
			${publicacion.nombre} </br> ${publicacion.descripcion} <br> <button type="button" class="btn btn-danger" data-id="${publicacion._id}">Eliminar</button>
		</p>	
	</div>
	
	`

	//imprimir los datos de publicaciones
	const publicacionList = document.getElementById('imprimir-publicacion')
	publicacionList.innerHTML = publicaciones.map(publicacion => template(publicacion)).join('')
	publicaciones.forEach(publicacion => {
		publicacionNode = document.querySelector(`[data-id="${publicacion._id}"]`)
		publicacionNode.onclick = async e => {
			await fetch(`/publicaciones/${publicacion._id}`, {
				method: 'DELETE',
				headers: {
					Authorization: localStorage.getItem('jwt')
				}
			})
			publicacionNode.parentNode.remove()
			alert('Eliminado con éxito')
		}
	})
}
// const getPublicaciones = async () => {
// 	const response = await fetch("/publicaciones", {
// 	  headers: {
// 		Authorization: localStorage.getItem("jwt"),
// 	  },
// 	});
// 	const publicaciones = await response.json();
// 	const template = (publicacion) => `
// 	  <div class="col-6 card">
// 		  <p class="p-3 card-text">
// 			  ${publicacion.nombre} </br> ${publicacion.descripcion} <br> <button type="button" class="btn btn-danger" data-id="${publicacion._id}">Eliminar</button>
// 		  </p>	
// 	  </div>
// 	  `;
  
// 	//imprimir los datos de publicaciones
// 	const publicacionList = document.getElementById("imprimir-publicacion");
// 	publicacionList.innerHTML = publicaciones
// 	  .map((publicacion) => template(publicacion))
// 	  .join("");
// 	publicaciones.forEach((publicacion) => {
// 	  publicacionNode = document.querySelector(`[data-id="${publicacion._id}"]`);
// 	  publicacionNode.onclick = async (e) => {
// 		await fetch(`/publicaciones/${publicacion._id}`, {
// 		  method: "DELETE",
// 		  headers: {
// 			Authorization: localStorage.getItem("jwt"),
// 		  },
// 		});
// 		publicacionNode.parentNode.remove();
// 		alert("Eliminado con éxito");
// 	  };
// 	});
//   };

const addFormListener = () => {
	const publicacionForm = document.getElementById('publicacion-form')
	publicacionForm.onsubmit = async (e) => {
		e.preventDefault()
		const formData = new FormData(publicacionForm)
		const data = Object.fromEntries(formData.entries())
		await fetch('/publicaciones', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
				Authorization: localStorage.getItem('jwt')
			}
		})
		publicacionForm.reset()
		getPublicaciones()
	}
}
const checkLogin = () =>
	localStorage.getItem('jwt')

const publicacionesPage = () => {
	loadInitialTemplate()
	addFormListener()
	getPublicaciones()
}

const loadRegisterTemplate = () => {
	const template = `
	<style>
	*,
	*:before,
	*:after {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
	
	body {
		background-color: #080710;
	}
	
	.shape:first-child {
		background: linear-gradient(#1845ad,
				#23a2f6);
		left: -80px;
		top: -80px;
	}
	
	.shape:last-child {
		background: linear-gradient(to right,
				#ff512f,
				#f09819);
		right: -30px;
		bottom: -80px;
	}
	
	form {
		height: 520px;
		width: 400px;
		background-color: rgba(255, 255, 255, 0.13);
		position: absolute;
		transform: translate(-50%, -50%);
		top: 50%;
		left: 50%;
		border-radius: 10px;
		backdrop-filter: blur(10px);
		border: 2px solid rgba(255, 255, 255, 0.1);
		box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
		padding: 50px 35px;
	}
	
	form * {
		font-family: 'Poppins', sans-serif;
		color: #ffffff;
		letter-spacing: 0.5px;
		outline: none;
		border: none;
	}
	
	form h3 {
		font-size: 32px;
		font-weight: 500;
		line-height: 42px;
		text-align: center;
	}
	
	label {
		display: block;
		margin-top: 30px;
		font-size: 16px;
		font-weight: 500;
	}
	
	input {
		display: block;
		height: 50px;
		width: 100%;
		background-color: rgba(255, 255, 255, 0.07);
		border-radius: 3px;
		padding: 0 10px;
		margin-top: 8px;
		font-size: 14px;
		font-weight: 300;
	}
	
	::placeholder {
		color: #e5e5e5;
	}
	
	button,
	a {
		margin-top: 50px;
		margin-bottom: 30px;
		width: 100%;
		background-color: #ffffff;
		color: #080710;
		padding: 15px 0;
		font-size: 18px;
		font-weight: 600;
		border-radius: 5px;
		cursor: pointer;
		text-decoration: none;
	}
	
	.social {
		margin-top: 30px;
		display: flex;
	}
	
	.social div {
		background: red;
		width: 150px;
		border-radius: 3px;
		padding: 5px 10px 10px 5px;
		background-color: rgba(255, 255, 255, 0.27);
		color: #eaf0fb;
		text-align: center;
	}
	
	.social div:hover {
		background-color: rgba(255, 255, 255, 0.47);
	}
	
	.social .fb {
		margin-left: 25px;
	}
	
	.social i {
		margin-right: 4px;
	}
	</style>
	<form id="register-form">
	<h1>Registro</h1>
	<div>
		<label>Correo</label>
		<input name="email" placeholder="Ingrese su email" />
	</div>
	<div>
		<label>Contraseña</label>
		<input type="password" name="password" placeholder="Ingrese su contraseña" />
	</div>
	<button type="submit">Registrar</button>
	<a href="#" id="login">Login</a>
	</form>
	<div id="error"></div>
		`
	const body = document.getElementsByTagName('body')[0]
	body.innerHTML = template
}
const gotoLoginListener = () => {
	const gotoLogin = document.getElementById('login')
	gotoLogin.onclick = (e) => {
		e.preventDefault()
		loginPage()
	}
}

const registerPage = () => {
	console.log('pagina de registro')
	loadRegisterTemplate()
	addRegisterListener()
	gotoLoginListener()
}

const loginPage = () => {
	console.log('pagina de login')
	loadLoginTemplate()
	addLoginListener()
	gotoRegisterListener()
}

const loadLoginTemplate = () => {
	const template = `


	<style media="screen">
	*,
	*:before,
	*:after{
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
	body{
		background: url(../img/fondologin.jpeg);
		background-repeat: no-repeat;
		background-size: cover;
	}
	.background{
		
	}
	.shape:first-child{
		background: linear-gradient(
			#1845ad,
			#23a2f6
		);
		left: -80px;
		top: -80px;
	}
	.shape:last-child{
		background: linear-gradient(
			to right,
			#ff512f,
			#f09819
		);
		right: -30px;
		bottom: -80px;
	}
	form{
		height: 520px;
		width: 400px;
		background-color: rgba(255,255,255,0.13);
		position: absolute;
		transform: translate(-50%,-50%);
		top: 50%;
		left: 50%;
		border-radius: 10px;
		backdrop-filter: blur(10px);
		border: 2px solid rgba(255,255,255,0.1);
		box-shadow: 0 0 40px rgba(8,7,16,0.6);
		padding: 50px 35px;
	}
	form *{
		font-family: 'Poppins',sans-serif;
		color: #ffffff;
		letter-spacing: 0.5px;
		outline: none;
		border: none;
	}
	form h3{
		font-size: 32px;
		font-weight: 500;
		line-height: 42px;
		text-align: center;
	}

	label{
		display: block;
		margin-top: 30px;
		font-size: 16px;
		font-weight: 500;
	}
	input{
		display: block;
		height: 50px;
		width: 100%;
		background-color: rgba(255,255,255,0.07);
		border-radius: 3px;
		padding: 0 10px;
		margin-top: 8px;
		font-size: 14px;
		font-weight: 300;
	}
	::placeholder{
		color: #e5e5e5;
	}
	button, a{
		margin-top: 50px;
		margin-bottom: 30px;
		width: 100%;
		background-color: #ffffff;
		color: #080710;
		padding: 15px 0;
		font-size: 18px;
		font-weight: 600;
		border-radius: 5px;
		cursor: pointer;
		text-decoration: none;
	}
	.social{
	margin-top: 30px;
	display: flex;
	}
	.social div{
	background: red;
	width: 150px;
	border-radius: 3px;
	padding: 5px 10px 10px 5px;
	background-color: rgba(255,255,255,0.27);
	color: #eaf0fb;
	text-align: center;
	}
	.social div:hover{
	background-color: rgba(255,255,255,0.47);
	}
	.social .fb{
	margin-left: 25px;
	}
	.social i{
	margin-right: 4px;
	}
    </style>


	<form id="login-form">
	<h1>Login</h1>
		<div>
			<label>Correo</label>
			<input name="email" placeholder="Ingrese su email"/>
		</div>
		<div>
			<label>Contraseña</label>
			<input type="password" name="password" placeholder="Ingrese su contraseña"/>
		</div>
		<button type="submit">Enviar</button>
		<a href="#" id="register">Registrarse</a>
		<a href="/" id="Regresar">Regresar</a>
	</form>
	<div id="error"></div>
			`
	const body = document.getElementsByTagName('body')[0]
	body.innerHTML = template
}

const gotoRegisterListener = () => {
	const gotoRegister = document.getElementById('register')
	gotoRegister.onclick = (e) => {
		e.preventDefault()
		registerPage()
	}
}

const authListener = action => () => {
	const form = document.getElementById(`${action}-form`)
	form.onsubmit = async (e) => {
		//para que no se refresque la pagina
		e.preventDefault()
		const formData = new FormData(form)
		//transformar todos los elementos del form a JS
		const data = Object.fromEntries(formData.entries())
		const response = await fetch(`/${action}`, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			}
		})
		const responseData = await response.text()
		if (response.status >= 300) {
			const errorNode = document.getElementById('error')
			errorNode.innerHTML = responseData
		} else {
			localStorage.setItem('jwt', `Bearer ${responseData}`)
			publicacionesPage()
		}
	}
}

const addLoginListener = authListener('login')
const addRegisterListener = authListener('register')
window.onload = () => {
	const isLoggeIn = checkLogin()
	if (isLoggeIn) {
		publicacionesPage()
	} else {
		loginPage()
	}
}
function funsalir(){
	console.log(localStorage.removeItem('jwt'));
	location.reload()
}