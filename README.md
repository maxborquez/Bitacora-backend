# Bitacora-backend

# actualizacion del sistema.

```bash
sudo apt-get update

```

# git y curl
Es fundamental instalar git y curl.

```bash
sudo apt-get install git curl

```

# Node version manager
Es fundamental instalar Node Version Manager para ejecutar la aplicacion.

```bash
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash 

```
```bash
source ~/.bashrc   

```

Instalamos la version 18.16.0 de Node
```bash
nvm install 18.16.0 

```

# .env
Por motivos de seguridad el archivo de variables .env no se subio al respositorio y debe ser solicitado personalmente.

# Instrucciones de instalacion
- Entrar al directorio donde se desea instalar y clonar el repositorio con el comando git clone.
```bash
git clone https://github.com/maxborquez/Bitacora-backend.git
```
- entrar al directorio clonado y ejecutar el comando de instalacion de dependencias.
```bash
npm install
```

- instalar la dependencia pm2 para dejar e proyecto ejecutandose permanentemente
```bash
npm install -g pm2
```
- crear y escribir el archivo .env con las variables que se utilizaran en el codigo.
```bash
nano .env
```

- cambiar el puerto utilizado por el proyecto en el archivo .env al puerto 80
```bash
nano .env
```

- Tambien es necesario dar permisos a la ip del frontend para el acceso de CORS.
moverse al directorio src
```bash
cd Bitaora-backend/src
```
editar el archivo index para agregar la ip
```bash
nano index.js
```

- una vez completado podemos ejecutar el proyecto
  
```bash
pm2 start npm -- start
```
- Se podra hacer peticiones al backend utilizando la ip y puerto apache del contenedor
ejemplo:
 ```bash
http://146.30.198.89:1152/api/
``` 

<br>
<br>
<br>


# Docker Run
Con una terminal situarse dentro del directorio raiz donde fue clonado este repositorio.
Una vez situado en la raiz del proyecto, ejecutar lo siguiente para construir la imagen docker:

```bash
docker build -t bitacora_backend:v1.0 . --no-cache

```

Una vez construida la imagen, lanzar un contenedor

```bash
docker run --rm -it -p 3000:3000/tcp bitacora_backend:v1.0
```

## Construido con

- [Node.js]
- [Vite]
- [Express]

