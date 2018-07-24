FROM node:8.11.3 AS build-env
WORKDIR /app
COPY package*.json ./
RUN npm install --production

FROM gcr.io/distroless/nodejs
COPY --from=build-env /app /app
WORKDIR /app
COPY . .
CMD ["webpack.plugins.js"]
