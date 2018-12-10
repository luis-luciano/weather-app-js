# Weather App
Aplicación que consume una API para consulta del estado del clima.
El objetivo de la aplicación consiste en aprender el uso de:
* Funciones Flechas
* async/await
* Constantes
* Clases

Algunas otras herramientas utilizadas son:
* Webpack
* Bootstrap 4
* API LocalStorage de HTML5

## Ejecución del proyecto
* Descargar el codigo fuente de este repositorio.
* Instalar las dependencias de node.js a través del comando **npm install**
* Construir la versión de despliegue con el comando **npm run build**.
* Preparar el servidor para la ejecución con el comando **npm run dev**

## Descripcion de archivos
* Store.js.md  
Se encarga del almacenamiento LocalStorage del navegador.

* UI.js  
Se encarga de manipular el DOM.

* Weather.js  
Se encarga de consumir la API.

## Comandos ejecutados
### Inicializar archivo de node.js

* Crear el archivo package.json de configuracion.  
npm init --yes

* Instalacion de webpack y herramientas extras  
**npm i webpack webpack-cli css-loader webpack-dev-server html-webpack-plugin**
* **css-loader**  
Cargar css.
* **webpack-cli**   
Herramienta de apoyo para webpack.
* **webpack-dev-server**   
Creacion de un servidor de ejecucion.
* **html-webpack-plugin**   
Para integracion de archivos de html.
