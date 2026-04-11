FROM node:25-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

RUN npm install -g expo-cli

COPY . .

EXPOSE 19000 19001 19002 8081

CMD ["npx", "expo", "start", "--tunnel"]

