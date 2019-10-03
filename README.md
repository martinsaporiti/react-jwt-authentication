
## Intro
Este proyecto implementado con ReactJs muestra como desarrollar autenticación y segurización de rutas mediante Hooks.
Además propone una implementación para agregar el token que retorna el login a cada request.
El código de este repositorio permite levantar un simple backend que implementa autenticación (login) y un método segurizado que require del token mencionado.

## Instalación
Muy simple:

```
npm install
```

## Levantando el backend
El backend debe ser puesto en marcha mediante el siguiente comando:

```
npm run start-json-server-auth -p3000
```
Es importante respetar el puerto, caso contrario se deben hacer algunas modificaciones.

## Poniendo en marcha la aplicación en React
La aplicación se ejecuta mediante el siguiente comando:

```
npm start -p3001
```

Es posible autenticarse mediante las credenciales:
```
user: batman@email.com
pass: batman
```

### Cambiando las urls/puertos por defecto.
En caso de levantar el backend en un puerto diferente al 3001 se debe modificar el archivo **.env.development**  con la url del backend:
```
REACT_APP_MY_VARIABLE_API_URL = http://localhost:3000/
```

En caso de levantar la aplicación reactjs en otro puerto se debe modificar el archivo **server.js** :

```
# En la línea 40 modificar la url y puerto de la aplicación reactjs
var whitelist = ['http://localhost:3001']
```

### Próximos pasos, utiliar contextAPI para contar con el usuario logueado en todos los componentes.

https://medium.com/trabe/how-we-handle-react-context-e43d303a27a2

### Bibliografía.
Para variables de entorno leer:
* [Variables de entorno](https://www.robertcooper.me/front-end-javascript-environment-variables).
