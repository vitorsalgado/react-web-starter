# Build Stage
# ---
FROM node:18.9.0 as build
WORKDIR /app
COPY ../../package.json package-lock.json ./

RUN npm ci

COPY ../.. .

RUN npm run build


# Run Stage
# ---
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
