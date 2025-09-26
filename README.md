# Health Care System

A modern full‑stack application for managing patients, doctors, appointments, prescriptions, and billing with a clean web UI and a secure REST API.

For login as Admin: 
user: admin
password: admin123

To register a new user: http://localhost/signup


---

# 🚀 Quick Start (Docker — Recommended)

Run the entire stack with Docker. **No local Java/Node/DB installs required.**

## Prerequisites
- [Docker](https://docs.docker.com/get-docker/) 20.10+
- [Docker Compose](https://docs.docker.com/compose/install/) v2+
- Git

## 1️⃣ Clone and Start

```bash
git clone https://github.com/DoaaGomaa89/Health-care-system.git
cd health-care-system
docker compose up --build
```

> The first build may take a few minutes while images are built and dependencies are installed.

## 2️⃣ Access the App

- **Frontend:** http://localhost  
- **API :** http://localhost:8080
- **Database:**  
  - MySQL:      localhost:3306

> Exact ports depend on your `docker-compose.yml` mappings.

## 3️⃣ Stop / Reset

```bash
docker compose down                    # stop
docker compose down -v                 # stop + remove DB volume (clean slate)
docker compose up --build --no-cache   # force a clean rebuild
```

## 4️⃣ DB Shell (inside container)

```bash
# MySQL
docker compose exec db mysql -u$MYSQL_USER -p$MYSQL_PASSWORD $MYSQL_DATABASE
```

---

# Tech stack
- **Front-end:** React 18 + TypeScript (or Angular 17) with Router & Axios/HttpClient, Ant Design / Material
- **Back-end:** Spring Boot 3 (Java 17), Spring Security (JWT), JPA/Hibernate
- **Database:** MySQL 8
- **Docs:** OpenAPI/Swagger UI

---

# Dependencies

## Front end
- React (or Angular)
- Router (React Router / Angular Router)
- Axios (or Angular HttpClient)
- TypeScript

## Back end
- `spring-boot-starter-web`, `spring-boot-starter-data-jpa`
- `spring-boot-starter-security` (JWT)
- DB driver (`mysql:mysql-connector-java`)
- JJWT (`io.jsonwebtoken:jjwt-*`) for JSON Web Tokens
- Springdoc OpenAPI UI (`springdoc-openapi-starter-webmvc-ui`)
- Lombok (optional)

---

# Configuration

Provide environment variables via a `.env` at the repo root (used by Compose) or export in your shell.

```bash
# MySQL (example)
# SPRING_DATASOURCE_URL=jdbc:mysql://db:3306/hcs_db?allowPublicKeyRetrieval=true&useSSL=false&serverTimezone=UTC
# SPRING_DATASOURCE_USERNAME=app
# SPRING_DATASOURCE_PASSWORD=app

# Hibernate
SPRING_JPA_HIBERNATE_DDL_AUTO=update

# JWT (HS512 needs a secret ≥ 64 bytes)
JWT_SECRET=please_generate_a_long_random_secret_string_64chars_or_more

# CORS (dev)
CORS_ORIGINS=http://localhost:3000,http://127.0.0.1:3000,http://localhost:4200
```

---

# 🧑‍💻 Manual Setup (Local Dev)

Prefer running without Docker?

## Install prerequisites
- Java 17 + Maven
- Node.js 18+ + npm
- MySQL 8

## Clone

```bash
git clone https://github.com/DoaaGomaa89/Health-care-system.git
cd health-care-system
```

## Back end (Spring Boot)

```bash
cd backend
mvn -DskipTests package
java -jar target/*.jar
# API http://localhost:8080
# Swagger http://localhost:8080/swagger-ui.html
```
> Dev mode:
```bash
mvn spring-boot:run
```

## Front end

```bash
cd frontend
npm ci
# React:
npm start              # http://localhost:3000
# Angular:
# ng serve --open      # http://localhost:4200
```

---

# Database schema

- JPA can create/update schema on first run (`SPRING_JPA_HIBERNATE_DDL_AUTO=update`).
- Optional seed data can live in `src/main/resources/data.sql`.

**Manual bootstrap (MySQL):**
```sql
CREATE DATABASE hcs_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'hcs_user'@'%' IDENTIFIED BY 'YOUR_STRONG_PASSWORD';
GRANT ALL PRIVILEGES ON hcs_db.* TO 'hcs_user'@'%';
FLUSH PRIVILEGES;
```

---

# Project Structure (key parts)

```
backend/
├── src/main/java/.../healthcare
│   ├── entity/           # Patient, Doctor, Appointment, Prescription, Invoice, User, ...
│   ├── repository/       # Spring Data repositories
│   ├── controller/       # REST endpoints
│   ├── service/          # Business logic
│   ├── security/         # JWT filters/config
│   └── config/           # CORS, Swagger, etc.
├── src/main/resources/
│   ├── application.yml
│   └── data.sql          # optional seed data
└── Dockerfile

frontend/
├── src/
├── package.json / angular.json
└── Dockerfile

docker-compose.yml        # DB + Backend + Frontend
```

---

# Features

- 🔐 **JWT Authentication** and role-based authorization
- 🧑‍⚕️ **Patients, Doctors, Appointments** (CRUD + scheduling)
- 💊 **Prescriptions & Records**
- 🧾 **Billing & Invoices**
- 📄 **OpenAPI Docs** via Swagger UI

---

# API Documentation

- Swagger UI: `http://localhost:8080/swagger-ui.html`
- JSON spec:  `/v3/api-docs`

---

# 📸 Screenshots

### Login Page
![Image of Login](https://github.com/akg07/Health-care-system-SB-Angular/blob/master/image%201.png)


### ADMIN Home Page
![Image of Admin home paage](https://github.com/akg07/Health-care-system-SB-Angular/blob/master/image%203.png)


### Admin Panel
![Image of Admin Panel-Options](https://github.com/akg07/Health-care-system-SB-Angular/blob/master/image%204%20-%20Admin%20Panel.png)


### Patinet List
![Image of patient list](https://github.com/akg07/Health-care-system-SB-Angular/blob/master/image%205%20-%20Patient%20page.jpg)

### Medicos Form
![Image of Medicos Form](https://github.com/akg07/Health-care-system-SB-Angular/blob/master/image%206%20-%20Medicos%20Form.png)

### Bill List
![Image of Bill list](https://github.com/akg07/Health-care-system-SB-Angular/blob/master/image%207%20-%20Bill%20List.png)

### Invoice Pr.1
![Image of Invoice](https://github.com/akg07/Health-care-system-SB-Angular/blob/master/image%208%20-%20Invoice%20part%201.jpg)

### Invoice Pr.2
![Image of Invoice](https://github.com/akg07/Health-care-system-SB-Angular/blob/master/image%209%20-%20Invoice%20part%202.png)

### Invoice PDF View
![Image of Invoice PDF](https://github.com/akg07/Health-care-system-SB-Angular/blob/master/image%2010%20-%20Invoice%20PDF.jpg)

### Contact Us
![Image of Contact Us](https://github.com/akg07/Health-care-system-SB-Angular/blob/master/image%2011%20-%20Contact%20Us.png)


### About Us
![Image of about Us](https://github.com/akg07/Health-care-system-SB-Angular/blob/master/image%2012%20-%20About%20us.png)


### User-role Options-panel
![User Options](https://github.com/akg07/Health-care-system-SB-Angular/blob/master/image%2013%20-%20User%20Panel.png)


### When user is not authorised
![User not authorised](https://github.com/akg07/Health-care-system-SB-Angular/blob/master/image%2013%20-%20User-Does-Not-Has-Access.png)
<!-- END:SCREENSHOTS -->

---

# Troubleshooting

- **JWT: “key size not secure enough for HS512”**  
  Use a secret **≥ 64 bytes** in `JWT_SECRET`.

- **CORS 403 / “Invalid CORS request”**  
  Include your frontend origin in `CORS_ORIGINS` and verify backend CORS config.

- **Ports already in use (3000/4200/8080/5432/3306)**  
  Edit mappings in `docker-compose.yml`, e.g.:
  ```yaml
  services:
    frontend:
      ports: ["80:80"]  
    backend:
      ports: ["8081:8080"]
    db:
      # or ["3307:3306"]     # MySQL
  ```

- **DB connectivity**  
  ```bash
  docker compose ps
  docker compose logs db
  # MySQL
  docker compose exec db mysql -u$MYSQL_USER -p$MYSQL_PASSWORD -e "SHOW TABLES" $MYSQL_DATABASE
  ```

- **Clean rebuild**  
  ```bash
  docker compose down -v
  docker compose up --build --no-cache
  ```

---

# License

This project is licensed under the **MIT License** (see `LICENSE`).

