// La web obtiene la informacion que presenta a traves de un modelo conocido como Client / Server. El cliente es alguien que hace un pedido de informacion, en general es el navegador, un programa, el celular, reloj inteligente, Alexa, etc. Cualquier dispositivo que solicita info a internet. El pedido se llama Request y se le realiza al servidor. Un servidor es una computadora especializada en procesar informacion.
// esto sucede de manera constante en internet.
// La URL de un sitio no es su direccion, es un alias que enmascara la direccion. La verdadera direccion es la IP del sitio, es un identificador unico para cada compu conectada a internet. Puede ser siempre el mismo IP o podemos tener IPs dinamicas y van mutando de manera dinamica.
// Cada web tiene su propia IP. Cuando yo entro por ejemplo a Google, este se comunica con un servidor y le pide su IP, ahi se inicia el proceso de request.
// Una vez que el navegador hizo todo esto, mi navegador me envia el codigo http para que yo pueda acceder al sitio.

// XHR en Network consta de todos los recursos a los que recurre el sitio para traer informacion

// una API es la forma en que un servidor expone su info en la web.

// En una WEB DINAMICA mi cliente le hace un pedido a mi servidor. El servidor se fija en la base de datos la info que tiene.

// Una Application Programming Interface es un software que se comunica con otro, de manera que dos aplicaciones esten conectadas. El DOM (Document Object Model) del navegador es una API.

// La mayoria esta formada con un patron de estuructura RESTFUL. Esta hecha siguiendo patrones de arquitectura REST.
// Toda API viene con una pagina de documentacion. Siempre que trabajo con una API debo tener la documentacion abierta.

// Para que una API sea considerada REST, debe estar separada en recursos, cada recurso esta almacenado en una URL distinta, debe usar JSON y no tiene que tener estado.
// El patron REST no es obligatorio, pero es una forma convencional para trabajar con otros programadores de manera organizada.

// let personajeMorty = {};

// esta es la manera en la que me comunico con una API, mediante una PROMESA. Usaremos el metodo FETCH que recibe un solo parametro que es una URL.
// Este proceso demora unos milisegundos, no es inmediato. Por eso luego diremos .then (una vez que te hayas comunicado con la URL, ejecutamos lo que sucede dentro del THEN)

// una vez q haya traido la personaje que necesito de la URL, vamos a ejecutar .then
// vamos a ejecutar la funcion q recibe como parametro la personaje que traje antes. Esta en JSON y no se puede leer directamente, por eso retorna el metodo .JSON aplicado al metodo que acabo de recibir.
// convierto ese JSON a javascript. Esto tambien demora, por eso ejecutamos nuevamente un .Then. Luego que obtiene esa info se puede ejecutar la funcion dentro.

// fetch('https://rickandmortyapi.com/api/character')
// 	.then((data) => {
// 		return data.json();
// 	})
// 	.then((personajes) => {
// 		console.log(personajes);

// 		const link = document.createElement('a');
// 		const body = document.body;
// 		body.appendChild(link);
// 		link.setAttribute('id', 'prox');
// 		console.log(link.id);
// 		link.textContent = 'Proxima pagina';
// 		// const link = document.querySelector('#prox');
// 		link.href = personajes.info.next;

// 		const seccion = document.querySelector('section');
// 		seccion.innerHTML = '';
// 		personajes.results.map((info) => {
// 			seccion.innerHTML += `
// 			    <article>
// 			    <div class="imagen">
// 			      <img src="${info.image}">
// 			    </div>
// 			    <div class="info">
// 			    <div class="nombre">
// 			      <h2>${info.name}</h2>
// 			    </div>
// 			    <div class="estado">
// 			      <p>${info.status}</p>
// 			      - <p>${info.species}</p>
// 			    </div>
// 			    <div class="ubicacion">
// 			      <p>Last known location:</p>
// 			      <p>${info.location.name}</p>
// 			    </div>
// 			    <div class="episodio">
// 			      <p>First seen in:</p>
// 			      <p>${info.episode[0]}</p>
// 			    </div>
// 			  </div>
// 			  </article>
// 		    `;
// 		});
// 	});

const link = document.createElement('a');
const body = document.body;
body.appendChild(link);
link.setAttribute('id', 'prox');
console.log(link.id);
link.textContent = 'Proxima pagina';

const buscarInfo = (URL) => {
	fetch(URL)
		.then((data) => {
			return data.json();
		})
		.then((personajes) => {
			console.log(personajes);

			// const link = document.querySelector('#prox');
			// link.href = personajes.info.next;
			link.onclick = () => {
				// e.preventDefault();
				buscarInfo(personajes.info.next);
				// esto se llama RECURSIVIDAD, es la propiedad en Javascript en la cual dentro de una funcion se puede llamar a si misma. No suele ser buena idea porque podriamos entrar en un loop infinito. En este caso no hay problema porque esto solo sucede cuando el usuario hace click en un boton.
			};

			const seccion = document.querySelector('section');
			seccion.innerHTML = '';
			personajes.results.map((info) => {
				seccion.innerHTML += `
			    <article>
			    <div class="imagen">
			      <img src="${info.image}">
			    </div>
			    <div class="info">
			    <div class="nombre">
			      <h2>${info.name}</h2>
			    </div>
			    <div class="estado">
			      <p>${info.status}</p>
			      - <p>${info.species}</p>
			    </div>
			    <div class="ubicacion">
			      <p>Last known location:</p>
			      <p>${info.location.name}</p>
			    </div>
			    <div class="episodio">
			      <p>First seen in:</p>
			      <p>${info.episode[0]}</p>
			    </div>
			  </div>
			  </article>
		    `;
			});
			// esto es una plantilla o un template de una web dinamica
		});
};

buscarInfo('https://rickandmortyapi.com/api/character');

// si hacemos un console log antes y despues del fetch y otro adentro, veremos primero el que esta debajo antes del que esta dentro, porque fetch es un metodo ASINCRONICO. Mientras estoy haciendo el fetch, Javascript sigue adelante y ejecuta el codigo que esta debajo.

// llamamos ENVELOPING a la info ensobrada que ofrece la API. La info extra que puede ofrecer una API.
// PROMESAS
// Muchas APIS no hacen enveloping y en esos casos es mas dificil conseguir algunos datos como la URL a la que queremos recurrir para llamar a la API.

// las APIs pueden ser publicas o privadas. Pero muchas APIs no son ABIERTAS, lo que significa que no puedo ver directamente los datos, esto es comun porque cada llamado a una API cuesta dinero y recursos del servidor en el que esta alojada la API. Por eso muchas APIs para protegerse instalan un API KEY, es una clave de usuario que piden las APIs para protegerse de ataques a las APIs publicas.

// comunicandonos con la API de Marvel
// fetch('https://gateway.marvel.com/v1/public/comics?apikey=5815682df904a6080be6caaebd915b02');
// https://gateway.marvel.com/v1/public/comics?apikey=89af8964112ea3350775c024cda415b8&offset=0&orderBy=title
// .then((data) => {
// 	return data.json()
// })
// .then((info) => {
// 	console.log(info)
// })

// el codigo 409 en la Network significa que yo cometi un error.
// el codigo 500 significa que el servidor esta teniendo un problema

// TAREA maquetar web de comic ADA usando foto y nombre de personajes de rick y morty
// consejos para la tarea
// empezar haciendo el fetch y recibiendo la info en la consola
// maquetar en HTML
// pasar la maqueta de HTML a Javascript
// usar SASS
