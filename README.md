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

## Environment files

In order to build locally you will need the following files and variables defined in the root of the project. Gatsby makes use of dotenv for building locally, as well as Zeit Now during a local server build using `now dev`.

```
.env
    - SENDER_EMAIL
    - SENDER_PASSWORD
.env.build
    - CONTENTFUL_SPACE_ID
    - CONTENTFUL_API_KEY
.env.development
    - SENDER_EMAIL
    - SENDER_PASSWORD
    - CONTENTFUL_SPACE_ID
    - CONTENTFUL_API_KEY
```

These files _SHOULD NOT_ be committed to the staging/production builds or repo. The variables are stored on the server for build configuration.

### For Mobile development

Simply run `npm run dev::mobile`. You can then access the development server via http://{HOSTNAME}:8000 on any mobile device. This URL will also be printed in the terminal for reference.

_Note: You need to be on the same network. Also, if your device is connected to a proxy, you will need to disable it to access the dev server_

## Production

Running `npm run build` will build the static site and assets found in `/public`. You can then publish these as a static site anywhere.

## Testing

Testing is carried out via Jest. You can run the test suites by using `npm test`. This will run all tests and snapshots.

If you have made component changes, more than likely this will affect the snapshots and you will need to run `npm test -- -u` in order to update the failing snapshots (be sure that the new snapshots reflect the changes correctly).

## Zeit Now

[Zeit Now](https://zeit.co/now) is used to deploy and alias builds of the application.

Staging builds are created for non-Master branches. Production builds are created from Master.

### Deployment for Staging

You can run a Staging build yourself with `npm run now-build::staging`, this will initialise, build and deploy the static files to a staging domain. It also now, creates a lambda to handle the contact form.

### Debugging

Whilst running deployment you may incur issues with the build. The CLI will inform you of this and tell you how to check the logs for more information.

But you can simply grab the target domain and run `now logs https://l3-digital-44t7pkt0h.now.sh .`. This is an example as each domain is unique, so make sure to update the URL in this command.

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
-   If you are having trouble build the project due to missing environment variables, make sure that you have the relavant dotenv files in the root of the project. As mentioned in [Environment files](#environment-files)
