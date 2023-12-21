# Bitacora-backend

#git y curl

Es fundamental instalar git para poder clonar el repositorio

# .env
Por motivos de seguridad el archivo de variables .env no se subio al respositorio y debe ser solicitado personalmente.

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

