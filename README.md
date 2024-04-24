# Customer order CRUD Code Test 

**Customer order crud** web application, built with Vue 3 and Express.js, streamlines user order management. Designed for ease of deployment, it leverages Docker for seamless execution.

- [Backend guide](#backend)
- [Frontend guide](#frontend)
- [Installation guide](#installation)
- [Docker guide](#docker)

## Backend:

- Node.js
- Express.js
- Typescript
- Mongo DB

```
api
├── app
│   ├── controllers
│   ├── middlewares
│   ├── models
│   ├── repositories
│   ├── requests
│   ├── resources
├── database
│   ├── seeders
├── localization
├── routes
├── utils
├── index.ts
```

## Frontend:

- Vue 3
- Typescript
- Tailwind
- Pinia
- Form kit

```
frontend
├── src
│   ├── app ( application sections )
│   ├── assets
│   ├── component ( global components )
│   ├── localization
│   ├── router
│   ├── stores
│   ├── utils
│   ├── views
│   ├── main.ts
```

## Installation:

- Install [Docker](https://www.docker.com/).
- Run `docker compose -f docker.compose.dev.yml up -d --build`
- Open: http://localhost:3402