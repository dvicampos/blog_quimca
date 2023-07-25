const getBlog = async () => {
	const response = await fetch("/publicaciones", {
	  headers: {
		Authorization: localStorage.getItem("jwt"),
	  },
	});
	const publicaciones = await response.json();
	const template = (publicacion) => `
	  <div class="col-6 card">
		  <p class="p-3 card-text">
			  ${publicacion.nombre} </br> ${publicacion.descripcion}
		  </p>	
	  </div>
	  
	  `;
  
	//imprimir los datos de publicaciones
	const publicacionList = document.getElementById("imprimir-publicacion");
	publicacionList.innerHTML = publicaciones
	  .map((publicacion) => template(publicacion))
	  .join("");
	publicaciones.forEach((publicacion) => {
	  publicacionNode = document.querySelector(`[data-id="${publicacion._id}"]`);
	  publicacionNode.onclick = async (e) => {
		await fetch(`/publicaciones/${publicacion._id}`, {
		  method: "DELETE",
		  headers: {
			Authorization: localStorage.getItem("jwt"),
		  },
		});
		publicacionNode.parentNode.remove();
		alert("Eliminado con éxito");
	  };
	});
  };


  const loadPruebaTemplate = () => {
	getBlog()
	const template = `
    <br>
	<br>
	<br>
	<div class="container text-center">
		<div class="row g-2" id="imprimir-publicacion"> 
			
		</div>	
	</div>
    <br>
    <br>
			  `;
	const div = document.getElementById("muestra");
	div.innerHTML = template;
	// const body = document.getElementsByTagName("body")[0];
	// body.innerHTML = template;
  };

// loadPruebaTemplate();