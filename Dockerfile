FROM node:alpine as builder
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm config set registry http://registry.npmjs.org/
RUN npm install
COPY src ./src
COPY public ./public
RUN npm run build

FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html
