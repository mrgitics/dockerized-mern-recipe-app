FROM node:18-alpine AS build

WORKDIR /app/client

COPY package.json /app/client/package.json
COPY package-lock.json /app/client/package-lock.json

RUN npm install
RUN npm install react-scripts@3.0.1 -g --silent

COPY . /app/client

RUN npm run build

FROM nginx:1.21-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/client/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
