FROM node:16
WORKDIR /app
COPY . .
CMD ["node", "-e", "console.log('Hello, Railway!')"]
