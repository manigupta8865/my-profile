# NextJS Boilerplate and wb-restaurants-web NextJS Apps

## Features.

- [TypeScript](https://www.typescriptlang.org/) support.
- Linting support using [Eslint](https://eslint.org/) and [Prettier](https://prettier.io/)
- Testing and test coverage support using [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- Forms logic and validation support using [React Hook Form](https://react-hook-form.com/) with zod.
- Data management support using [React Query](https://react-query.tanstack.com/)
- GraphQL support using [GraphQL Request](https://github.com/prisma-labs/graphql-request).
- GraphQL playground by using [GraphiQL](https://github.com/graphql/graphiql)..

## Setup

- Create a `.env.local` environment variables file (ignored in Git by default). Unlike other environment variables files, this file should contain secrets so DO NOT remove it from `.gitignore`! An additional `.env.local.sample` is present in this repository to be use as a reference.
- For the best development experience, you can use [VSCode](https://code.visualstudio.com/) with the recommended workspace extensions (press `cmd+shift+x` to open the Extensions tab -> type `@recommended` to see the list of extensions recommended for this workspace). **Note:** this step is not mandatory, you can pick and choose which extensions to use, or even disable/uninstall all of them..

## Usage.

- `yarn dev` - starts NextJS in dev mode
- `yarn build` - builds the NextJS files for production
- `yarn start` - starts NextJS in production mode
- `yarn lint` - lints the files in this project
- `lint:fix` - applies possible automatic linting and formatting fixes on the files in this project
- `test` - runs all unit tests in this project
- `test:ci` - runs all unit tests in this project in CI mode
- `test:watch` - runs all unit tests in this project in watch mode
- `test:coverage` - provides test coverage information in the terminal
- `test:coverage:open` - provides test coverage information in the browser

# Technical On-boarding Reading Recommendations

Find listed bellow some CORE recommended resources (both quick starts and more in depth) for a proper technical ramp-up.
For additional libraries that are used on the project (such as Reac hook form, React Query, etc.) you can take a look at their official documentations or other preferred learning mediums whenever required

## Quick Start:

- [React](https://beta.reactjs.org/learn)
- [Chakra UI](https://egghead.io/courses/build-a-modern-user-interface-with-chakra-ui-fac68106)
- [Typesctipt (in React)](https://www.youtube.com/watch?v=PL1NUl7fQ2I&list=PLG-Mk4wQm9_LyKE5EwoZz2_GGXR-zJ5Ml)
- [React Testing Library](https://www.robinwieruch.de/react-testing-library)
- [NextJS](https://nextjs.org/learn)

## In Depth Resources

- [React](https://beta.reactjs.org)
- [Chakra UI](https://chakra-ui.com)
- [Typesctipt (in React)](https://react-typescript-cheatsheet.netlify.app/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [NextJS](https://nextjs.org/docs)
