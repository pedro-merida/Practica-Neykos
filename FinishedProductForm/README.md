# FinishedProductForm 

## Consideraciones generales
En este repositorio se encuentra el código del formulario de Producto Terminado para ser rellenado y de la generación del PDF.


## Ejecución
Corriendo el comando `npm start`


## Navegación
* `localhost:3000`: En esta página hay un botón que dice `Download`, el cual genera la plantilla del PDF del formulario de producto terminado.
* `localhost:3000/finished-product`: En esta página se encuentra el formulario para ser rellenado por el operador. Este no se encuentra en su estado final, hay que hacerle varios cambios.

## Módulos

Los módulos que no aparecen en el siguiente listado, no son relevantes para el entendimiento del código. 

* ```src/components/ConvertToPdf.js```: En este módulo se encuentran todas las funciones relacionadas a la generación del PDF de producto terminado. El siguiente paso sería adaptarlo para recibir la información de un JSON y mostrarla en los campos que correspondan.

* ```src/components/LandingPage```: Es la página principal y en ella se encuentra el botón `Download` que llama a la función generadora del PDF.

* ```src/components/FinishedProduct.js```: Es la página que contiene al formulario a ser rellenado por el operador. 


Dentro de la carpeta `finished_product`, se encuentran módulos que se utilizan dentro de `FinishedProduct.js`.

* `GeneralInfo.js`: Contiene los campos de la información general del formulario.

* `ProductInformationTab.js`: Contiene los campos de la información del producto del formulario.

## Consideraciones Adicionales

1. En la carpeta `docs` se encuentra el ppt que detalla los campos de cada sección del formulario y un PDF que contiene anotaciones sobre cambios que falta incorporar en lo que alcancé a implementar.


