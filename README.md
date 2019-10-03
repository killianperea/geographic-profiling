# GeographicProfiling

El esqueleto del proyecto se ha generado con [Angular CLI](https://github.com/angular/angular-cli) version 8.3.6.

## Dependencias necesarias para ejecutar la aplicación

Node > 10 -> https://nodejs.org/es/

## Preprocesos antes de ejecutar la aplicación

1. Ir a la raiz del proyecto
2. Ejecutar `npm install `

## Versión de desarrollo

Ejecuta `npm run start` para ejecutar la version de desarrollo. Se abrerá el navegador que tengas por defecto en la url `http://localhost:4200/`. La aplicación se refrescara automaticamente si se cambia algo en el codigo fuente.

## Build a produccion

Ejecuta `npm run browser:build` para hacer una build para producción. El codigo de distribución se encuentra en `dist/`.

## NgRx

En el proyecto he utilizado NgRx para la gestión de los datos, esto no hubiese sido necesario ya que para aplicaciones pequeñas como esta creo que es demasiado verbose, sin embargo, creo que es una buena oportunidad para que veais el potencial que tiene si aun no lo habeis hecho :) así tambien podais ver como lo he implementado.

Para que podais verlo de una forma mas visual, existe un plugin de chrome (desconozco si esta para otras) en el que te permite ver el estado de la store(donde se almacenan todos los datos de la aplicación) en todo momento e incluso de permite ver el arbol de datos. [Plugin Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=es)
I 



