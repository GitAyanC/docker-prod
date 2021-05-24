FROM node:alpine
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

#Multi-Stage Builds
#Run this using docker run -p 80:80 <Container-id-built>
FROM nginx
COPY --from=0 /app/build /usr/share/nginx/html