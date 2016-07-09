# SOWA
Proyecto de análisis de imágenes para POE


SOWA, permitirá comparar dos imágenes mediante el algoritmos desarrollados en javascript, generará un JSON y este será
guardado como un BSON en una base de datos NoSQL MongoDB llamada 'sowa', este cuenta con imágenes satelitales por default
dentro del sistema pero tambien podrás usar las tuyas para compararlas con el solo hecho de arrastrarlas sobre los drop-zone
en la primera sección. posteriormente este generara un conjunto de botones para mejorar los algoritmos de comparacion sobre 
imagen de diferencia.

boton = 'Usa Imágenes de ejemplo' -> permitirá usar las imágenes que están con los nombres 'img1' y 'img2' en la ruta 
	/public/img/.

Tercera Sección:

	Una vez ya se generó la imagen de diferencia podremos introducir un valor numérico en el input que dice 'Kilometros
referenciales' este hace referencia a la cantidad de kilómetros cuadrados de las imágenes originales y llama al controlador 
para que este realice el cálculo y modifique en la vista.

Información de variables principales:

	JSON: 
		json_sowa{
			src : String,
			porcentaje : String,
			kms : String 
		
		}
	Estos valores con obtenidos en :
		main.js (src y porcentaje) y en index.html (kms).

	Estos valores significan:
		src: Ruta local de la imagen de diferencia obtenida luego de la comparación de las imágenes.
		porcentaje: Valor numérico que representa el % de diferencia entre las imágenes.
		kms: Distancia total de la imagen.

Para la instalación recordar ejecutar el npm install y después enceder mongod y finalmente node sowa.js
