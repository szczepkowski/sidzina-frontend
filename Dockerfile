FROM nginx:1.17.1-alpine
COPY /dist/sidzina-frontend /usr/share/nginx/html
