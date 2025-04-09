# front_UpWay

Front for the Upway project

## Configuration

All configuration is done via environement variables, or with a .env file.

### VITE_BACKEND_URL

URL of the backend API. <br>
Ex: https://api.upway.com

### INSTANCE_NAME

name of the `instance_name` label used in prometheus metrics

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run E2E tests

```sh
npm run test-ct
```

Warning: tests assume you are using the provided dummy inserts in the backend's database!

### Run Unit tests

```sh
npm run test
```

## Docker Setup

```sh
docker buildx build -t <image tag> .
docker run -p 8080:8080 -e VITE_BACKEND_URL=<backend url> <image tag>
```
