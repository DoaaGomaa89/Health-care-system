# ---------- builder ----------
# If your project is older (Angular 8–12), Node 14 is safest.
FROM node:14-alpine AS build
WORKDIR /app

COPY package*.json ./
# legacy-peer-deps avoids peer warnings breaking install on old projects
RUN --mount=type=cache,target=/root/.npm npm ci --legacy-peer-deps --no-audit --no-fund

COPY . .
# Try a recent CLI; if the project is old, use a pinned one (e.g. @12)
# The '||' fallback tries the older flag style for older Angular
RUN npx -y @angular/cli@12 ng build --prod || npx -y @angular/cli@12 ng build --configuration production

# ---------- runtime ----------
FROM nginx:1.25-alpine
COPY nginx.default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

