
## Healthy Food back-end
This is a backend project created for to explore new tech stack. It's build with Nest.js, TypeScript, typeORM and PostgreSQL.

### Getting started
For the fronted clone this repo
[https://github.com/markj82/fe-hfood](https://github.com/markj82/fe-hfood)
and follow the instuctions in README file

Create .env file in the root folder and paste this code:
```
APP_SECRET=!NotSoSecretChangeMe!
TYPEORM_CONNECTION=postgres
TYPEORM_USERNAME=marek
TYPEORM_PASSWORD=mareczek
TYPEORM_HOST=localhost
TYPEORM_PORT=5432
TYPEORM_DATABASE=food
TYPEORM_ENTITIES=**/*.entity.ts,src/**/*.entity.ts
TYPEORM_MIGRATIONS=migration/*.ts
TYPEORM_MIGRATIONS_DIR=migration
TYPEORM_SYNCHRONIZE=false
```

if you don't have PostgreSQL, you have to download it and install
[https://www.postgresql.org/](https://www.postgresql.org/)

install all dependencies
```
npm install
```

and run the project with
```
npm run start
```