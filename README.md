<p align="center">
    <img src="./src/assets/images/l3_logo.png?raw=true" width="250" alt="l3 Digital logo"/>
</p>

# L3 Digital

[![CircleCI](https://circleci.com/gh/lmcjt37/l3digital.svg?style=svg&circle-token=54c2a8c5dec98d4935c045492a4344bea2e5974a)](https://circleci.com/gh/lmcjt37/l3digital)

Static website for L3 Digital, built using GatsbyJS, React, GraphQL, and supplied with content from Contentful CMS. It takes it's design from a [HTML5UP](https://html5up.net/) theme port [gatsby-starter-forty](https://github.com/ChangoMan/gatsby-starter-forty).

#### Dependencies

-   Gatsby-cli - `npm install -g gatsby-cli`

## Getting Started

-   Install dependencies - `npm install`
-   Start local development server - `npm run dev`
-   This will serve up a dev server with hot reload locally at [http://localhost:8000/](http://localhost:8000/)

### For Mobile development

Simply run `npm run dev::mobile`. You can then access the development server via http://{HOSTNAME}:8000 on any mobile device. This URL will also be printed in the terminal for reference.

_Note: You need to be on the same network. Also, if your device is connected to a proxy, you will need to disable it to access the dev server_

## Production

Running `npm run build` will build the static site and assets found in `/public`. You can then publish these as a static site anywhere.

## Testing

-   TODO
-   [ ] Agree testing framework(s)
-   [ ] Agree structure and workflow

## GraphQL

Once you have your development server up and running, this will also spin up a GraphiQL IDE which you can inspect your graph data with queries. This can be accessed at [http://localhost:8000/\_\_\_graphql](http://localhost:8000/___graphql)

The left panel is your query panel, a default query should auto-populate. Failing this, use one of the working examples from the site.

The right panel shows the response back from the server. This will allow you to identify the correct nodes needed for development.

"Docs" on the far right side will allow you to search for available data, such as the content models available from Contentful CMS.

## Linting

This is handled by our CI which uses eslint in order to run checks and balances through the codebase. It incorporates plugins for es6 and react to help the eslint parse correctly.

Can be run locally by `npm run lint`

### linting CircleCI config

#### Dependencies

-   [Docker](https://docs.docker.com/install/)
-   CircleCI CLI
    `$ curl -o /usr/local/bin/circleci https://circle-downloads.s3.amazonaws.com/releases/build_agent_wrapper/circleci && chmod +x /usr/local/bin/circleci`

You can then make changes, when needed, to the Circle CI config.yml file and test it locally by `npm run lint::circleci`

### Prop-types

The CI is more strict when it comes to checking prop-types during the linting step. Make sure that all namespaces are correct which you are checking as this can cause the builds to fail.

#### Troubleshooting

-   Static asset issue - Use `npm run clearcache` which will remove all stale data and fix the issue.
-   GraphQL issues - New content and assets can take time to propogate out. If it's an issue in local development then try restarting your development server.
-   Zeit Now sometimes fails to deploy during merge checks, and the logs provide no further useful information. This seems to be related to some form of server-side caching. If re-deployment continues to fail, then try deploying manually via CLI with `npm run now-build::production`. If it continues to fail, then try simplifying your changes to identify the breaking change.
