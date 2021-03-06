FROM node:alpine
WORKDIR '/app'
COPY package.json ./
COPY package-lock.json ./
RUN npm config set registry http://registry.npmjs.org/
RUN npm install
COPY . .
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=0 /app/build /usr/share/nginx/html