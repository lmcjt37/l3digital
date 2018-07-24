# L3 Digital

[![CircleCI](https://circleci.com/gh/lmcjt37/l3digital.svg?style=svg&circle-token=54c2a8c5dec98d4935c045492a4344bea2e5974a)](https://circleci.com/gh/lmcjt37/l3digital)

Website for L3 Digital, built using GatsbyJS, React, GraphQL, and supplied with content from Contentful CMS.

## Dependencies

- Gatsby-cli - `npm install -g gatsby-cli`

## Getting Started

- Install dependencies - `npm install`
- Start local development server - `npm run dev`
- This will serve up a dev server with hot reload locally at [http://localhost:8000/](http://localhost:8000/)

### For Mobile development

- Install ngrok - `npm install ngrok -g`
- After starting a local development server with `npm run dev` you can then open another terminal and run `npm run dev::mobile`
- You will then be able to use the randomly generated domain to access the localhost.

#### production

`npm run build`

This will build the static site and assets for hosting wherever.
