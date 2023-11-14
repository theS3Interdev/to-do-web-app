# New ToDo

An open source application built using the new router, server components and everything new in Next.js 14.

> **Warning**
> This app is a work in progress. I'm building this in public. You can follow the progress on Twitter [@theSavannahDev](https://twitter.com/theSavannahDev).

## About this project

This project as an experiment to see how a modern app (with features like authentication, API routes etc) would work in Next.js 14 and server components. I also wanted to put in place the basis of a framework for a SaaS project.

## Note on Performance

> If you see something broken, you can ping me [@theSavannahDev](https://twitter.com/theSavannahDev).

## Features

- `/app` dir,
- Routing, Layouts, Nested Layouts and Layout Groups
- Data Fetching, Caching and Mutation
- Loading UI
- Route handlers
- Metadata files
- Server and Client Components
- API Routes and Middlewares
- Authentication using **Clerk**
- ORM using **Prisma**
- Data fetching using **TanStack Query**
- Database on **CockroachLabs**
- UI Components built using **Shadcn UI**
- Styled using **Tailwind CSS**
- Validations using **Zod**
- Written in **TypeScript**

## Running Locally

1. Install dependencies using pnpm:

```sh
pnpm install
```

2. Copy `.env.example` to `.env` and update the variables.

```sh
cp .env.example .env
```

3. Start the development server:

```sh
pnpm dev
```

## License

Licensed under the MIT license.
