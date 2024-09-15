FROM node:18-alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . ./

EXPOSE 5001

CMD ["sh", "-c", "npm run seed && npm run dev"]
