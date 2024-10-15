FROM node:22-alpine AS demo-server

WORKDIR /node-server

# install dependencies
COPY package*.json /node-server/
# COPY package.json /node-server/
RUN npm i

COPY server.js /node-server/

EXPOSE 4000

# run service
ENTRYPOINT [ "node", "server.js" ]
