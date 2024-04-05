# Softek Serverless AWS | Reto tecnico

## Requerimientos
Para ejecutar la aplicacion ud debe tener instalado y configurado las siguientes herramientas:

* [cuenta de AWS](https://aws.amazon.com/resources/create-account/)
* [AWS cli](https://aws.amazon.com/es/cli/)
* [Make command](https://www.gnu.org/software/make/manual/make.html)
* [Node 16.x, o superior](https://nodejs.org/en/download)
* [ServerLessFramework](https://www.serverless.com/framework/docs-getting-started)

## Configuracion
Para ejecutar el proyecto desde su entorno local debe ejecutar la siguiente orden
```bash
make install
```
Esto inicializara la aplicacion en su entorno local y la dejara lista para su despliegue o ejecucion para pruebas locales.

- *En Modo Local*

El siguiente paso en la configuracion del proyecto es asignar las variables de entorno en el archivo .env generado en el comando anterior.
```bash
ENV=
LOG_LEVEL=
REGION=
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_SESSION_TOKEN=
```

## Commandos
Ud Dispone de una variedad de comandos para interactuar con la aplicacion y para su despliegue.

|comando| Descripcion|
|------|-----------|
|``` make deploy ```| Este comando despliegua la aplicacion serverless hacia AWS. |
|``` make dev```| Este comando ejecuta la aplicacion en modo offline.|

## Rutas
![Rutas del proyecto](https://github.com/sail3/softek_solution/blob/main/oas.png?raw=true)

Para mas detalle de las rutas puede revisar el archivo 
```./openapi.yml```

## License
Copyright 2024 [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0)
