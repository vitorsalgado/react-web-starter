# Build Stage
# ---
FROM node:14.17.3 as build
WORKDIR /app
COPY ../../package.json yarn.lock .yarnrc.yml ./
COPY ../../.yarn ./.yarn

RUN yarn --immutable

COPY ../.. .

RUN yarn build


# Run Stage
# ---
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
