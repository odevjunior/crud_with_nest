FROM node:19-alpine3.15
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["node", "dist/main.js"]
