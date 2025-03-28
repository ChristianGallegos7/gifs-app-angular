# Etapa 1: Construcción de la app Angular
FROM node:20-alpine AS builder

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build --configuration=production

# Etapa 2: Despliegue de la app Angular en nginx

FROM nginx:alpine

# Borra el contenido por defecto de Nginx
RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist/gifs-app/browser /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
