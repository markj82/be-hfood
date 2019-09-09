This is a backend project created for Mercarto. It's build with Nest.js, TypeScript, typeORM and PostgreSQL.

First of all, after you clone this repo, create .env file in the root folder and paste this code
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

install all dependencies
```
npm install
```

and run the project with
```
npm run start
```