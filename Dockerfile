FROM node:16
WORKDIR /app
COPY . .
CMD ["node", "-e", "console.log('Hello, Railway!')"]
docker build -t seo-platform:latest .
docker run -p 5000:5000 --env-file .env seo-platform:latest
docker-compose up --build
npm ci
