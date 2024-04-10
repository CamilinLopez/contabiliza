FROM node:20.11.1
WORKDIR /myback
COPY package*.json .
RUN npm install
COPY . .

CMD npm start