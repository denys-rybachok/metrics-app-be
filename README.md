## Installation

```bash
npm install
```

## Env

Before running, you must create an .env file with the correct DATABASE_URL for connecting to your PostgreSQL database.
DATABASE_URL="postgresql://postgres:12345@localhost:5432/postgres"

## Start

```bash
npm run start:dev
```

## Seed

Seed db with default values:

```bash
npm run seed
```

## Prisma

Generate the Prisma Client after schema changes:

```bash
npx prisma generate
```

Run database migrations:

```bash
npx prisma migrate dev
```

```

```
