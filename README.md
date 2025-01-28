# ToDoListMontechelo

Para ejecutar el proyecto primero hacer `npm i` para instalar dependencias del proyecto, seguido del comando `npx json-server db.json` para iniciar la base de datos local y por ultimo `ng s` para iniciar el servidor Angular.

# Información relevante
- El proyecto esta hecho con Angular 17
- El proyecto utiliza routing y modules
- El proyecto maneja un core (logica de la aplicación) en donde se encuentran los servicios e interfaces manejadas a los largo de la aplicación

# Realización de la prueba
Se creo un modulo llamado `tasks` el cual tiene su respectivo routing, modulo que es cargado mediante `lazy loading` en el `app.routing`, despues de esto, se crean dos componentes, uno para listar y otro para ver el detalle de las tareas. En el componente de listar, se van a poder crear nuevas tareas y se van a poder marcar o desmarcar como finalizadas. En el componente de detalle, se va a poder editar, eliminar y ver un detalle mas especifico de cada tarea. Se maneja todo a traves de un servicio y de un archivo de interfaz para el respectivo tipado de cada respuesta y formulario.
