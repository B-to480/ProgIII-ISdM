# Trabajo Integrador CRUD Dev Web

Tenemos funciones CRUD en la pagina web:
	·La función crear nos permite Crear publicaciones que seran visibles para los visitantes.
	El servicio utiliza funciones de comunicación con la BD de SupaBase y mediante las funciones de REACT, le pedimos al usuario que ingrese los datos que desea, en este caso un titulo y el contenido de la publicación, y al guardar, se da la orden a SupaBase que guarde los datos que se envian desde nuestra pagina, hacia la BD que guardará esos datos que ya habran sido validados. En la pagina de publicaciones tenemos un botón "Crear Publicación" que abrira los cuadros de texto para escribir los datos.
	·Una vez creado el contenido, La pagina LeeRá ese contenido para mostrarlo en la pagina de Publicaciones. El servicio crea el query que solicita traer todos los datos de la tabla ya ordenados de nuevo a viejos, y luego de traer exitosamente los datos de la tabla, los presentamos de forma agradable, pero si no encuentra que mostrar, o se produce un error de comunicación para traer las publicaciones, se mostrará el mensaje apropiado.
	·Al tener las publicaciones expuestas en la pagina, tendremos la opción de Editarlas/ActUalizarlas.
	El servicio de actualizar recibe los cambios aplicados en los cuadros de texto cuando se preciona Guardar, y se comunica con SB para actualizar la instancia con el cambio de titulo o de contenido, y si algo salió mal, mostrará un mensaje con la razón.
	El botón editar esta presente en cada una de las publicaciones para editar/actualizar una publicaciones especifica, al precionarla, activaremos los cuadros de texto con el contenido de la publicación en cuestión.
	·El otro boton que acompaña a cada publicación es el de ElimiDar publicación que eliminará de la BD la publicación en relación al botón.
	El servicio recibe el ID cuando la confimación de eliminar es positiva, y se envia la orden a SB para que elimine la publicación, y si la publicación se resiste a ser eliminada, se mostrará la razón que lo causa.
	Cada publicación viene acompañada de este botón, y el botón sabe cual Publi esta asignada a el para que dar la orden de cual eliminar.
	

# TP3 APIs y useEffect

Crear un archivo, o agregar al archivo, .env el enlace: https://pokeapi.co/api/v2/pokemon/lechonk
En el proyecto relevante al TP3, necesitamos app.jsx, .env, y '/components/Conapi.jsx'. Aqui cargaremos una api propuesta por la consigna, y mostraremos unos pocos datos sobre un personaje de la cultura del entretenimiento.