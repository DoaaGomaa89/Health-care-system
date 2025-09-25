# =========================
# 1) Build stage (Maven)
# =========================
FROM maven:3.9-eclipse-temurin-17 AS build
WORKDIR /src

# Copy POM first to leverage cache
COPY pom.xml .
# Pre-fetch dependencies (cached)
RUN --mount=type=cache,target=/root/.m2 mvn -B -q -DskipTests dependency:go-offline || true

# Copy sources and build
COPY src ./src
# Build (skip tests for speed; remove -DskipTests if you need tests)
RUN --mount=type=cache,target=/root/.m2 mvn -B -DskipTests package

# =========================
# 2) Runtime (JRE)
# =========================
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app

# Copy the entire target directory (no shell in COPY)
COPY --from=build /src/target /artifacts

# Pick the first .jar or .war produced and stage it as /app/app.jar
# (fails the build early if nothing was produced)
RUN set -e; \
    ARTIFACT="$(ls /artifacts/*.jar /artifacts/*.war 2>/dev/null | head -n1)"; \
    if [ -z "$ARTIFACT" ]; then \
      echo "ERROR: No JAR/WAR found in /artifacts (did 'mvn package' produce an artifact?)" >&2; \
      exit 1; \
    fi; \
    cp "$ARTIFACT" /app/app.jar; \
    ls -lah /app/app.jar

EXPOSE 8080

# Start Spring Boot (executable JAR or WAR with spring-boot repackage)
ENTRYPOINT ["java","-jar","/app/app.jar"]
