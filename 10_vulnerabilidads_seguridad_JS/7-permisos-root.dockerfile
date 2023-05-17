# VULNERABILIDAD
# Configuración incorrecta de la seguridad
# Al configurar los permisos de usuario, se configura como root
# lo que significa privilegios de nivel administrador
# pudiendo instalar cualquier tipo de aplicacion maliciosa

FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

# SOLUCION 
# Ejecuta solo con el usuario
# Para no tener permisos de nivel que puedan arruinar
USER node

# Set user
# USER root

RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "server.js" ]