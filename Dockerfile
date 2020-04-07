FROM node:latest

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN npm install
RUN npm install react-scripts@3.4.1 -g

EXPOSE 3001

CMD npm start

