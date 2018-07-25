# L3 Digital

[![CircleCI](https://circleci.com/gh/lmcjt37/l3digital.svg?style=svg&circle-token=54c2a8c5dec98d4935c045492a4344bea2e5974a)](https://circleci.com/gh/lmcjt37/l3digital)

Static website for L3 Digital, built using GatsbyJS, React, GraphQL, and supplied with content from Contentful CMS. It takes it's design from a [HTML5UP](https://html5up.net/) theme port [gatsby-starter-forty](https://github.com/ChangoMan/gatsby-starter-forty).

#### Dependencies

- Gatsby-cli - `npm install -g gatsby-cli`

## Getting Started

- Install dependencies - `npm install`
- Start local development server - `npm run dev`
- This will serve up a dev server with hot reload locally at [http://localhost:8000/](http://localhost:8000/)

### For Mobile development

#### Dependencies

- ngrok - `npm install ngrok -g`

After starting a local development server with `npm run dev` you can then open another terminal and run `npm run dev::mobile`. You will then be able to use the randomly generated domain to access the localhost.

## production

Running `npm run build` will build the static site and assets found in `/public`. You can then publish these as a static site anywhere.

## Testing

- TODO
- [ ] Agree testing framework(s)
- [ ] Agree structure and workflow

## Linting

This is handled by our CI which uses eslint in order to run checks and balances through the codebase. It incorporates plugins for es6 and react to help the eslint parse correctly.

Can be run locally by `npm run lint`

### linting CircleCI config

#### Dependencies

- [Docker](https://docs.docker.com/install/)
- CircleCI CLI
  `$ curl -o /usr/local/bin/circleci https://circle-downloads.s3.amazonaws.com/releases/build_agent_wrapper/circleci && chmod +x /usr/local/bin/circleci`

You can then make changes, when needed, to the Circle CI config.yml file and test it locally by `npm run lint::circleci`
