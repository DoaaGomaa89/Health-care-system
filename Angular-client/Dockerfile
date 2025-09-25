# --- build Angular ---
FROM node:14-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN --mount=type=cache,target=/root/.npm npm ci --legacy-peer-deps --no-audit --no-fund
COPY . .
# build into a flat /app/dist directory
RUN npx -y @angular/cli@12 ng build --configuration production --output-path=dist

# --- nginx ---
FROM nginx:1.25-alpine
COPY nginx.default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
