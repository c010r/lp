# Usamos una imagen ligera de Nginx
FROM nginx:alpine

# (Opcional) Borramos la página por defecto de Nginx para evitar conflictos
RUN rm -rf /usr/share/nginx/html/*

# Copiamos TODOS los archivos de tu carpeta actual a la carpeta pública de Nginx
COPY . /usr/share/nginx/html

# Exponemos el puerto 80 (interno del contenedor)
EXPOSE 80

# Comando de inicio
CMD ["nginx", "-g", "daemon off;"]