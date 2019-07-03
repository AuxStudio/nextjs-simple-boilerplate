# nextjs-simple-boilerplate

A Next.js, Firebase and Redux boilerplate that we use internally.

## What's in the box?

- Next.js (server-side rendering when you need it, static exporting if you don't)
- Redux
- Eslint and Prettier
- Multiple Firebase environments
- Auth
- Firestore
- Cloud storage
- Easy to use action dispatch system
- Google Analytics
- Error handling
- System message handling
- Loading handling (page and app loading)
- SEO
- Material-ui
- Basic components (Layout, HeaderBar, FooterBar, Typography)
- Constant improvement and support

## In the pipeline

- Style guide including an explanation of how and why we do things the way we do them
- Automate part of the project cloning process with cookie-cutter.
- Purge the Redux persistor based on a flag (e.g. date) in Firestore
- Unit testing
- Travis CI

## Usage

Take a look at the [Setup Guide](./docs/SETUP_GUIDE.md).

`NOTE: ENV refers to the environment you are deploying to, ie. development, testing, staging, production.`

TODO: Style guide

## Development

1. Clone the project:

```
git clone https://github.com/AuxStudio/nextjs-simple-boilerplate
```

2. Install dependencies:

```
yarn
```

3. Run the app:

```
yarn run dev
```

4. Do some work.

5. Create a PR.

On PR approval and merge into master:

6. yarn run publish\

### Upgrade dependencies

1. Run update script:

```
yarn run update-deps
```

## Storybook

```
yarn run storybook
```

## Export

Add the `build-storybook` step only if you want to deploy your storybook alongside your app.

Add the `export` step only if you want to deploy a static site, that is, a site that does not require a node.js server to run it.

```
yarn run build-ENV
yarn run build-storybook
yarn run export
```

In the `export` step, `robots.txt` and `sitemap.xml` will be created and assets will be copied from `./src/public` to `./dist`.

You will deploy the dist folder.

## Hosting

Make sure that you've built and exported the app as above.

```
yarn run deploy-ENV
```

OR deploy to all environments except production

```
yarn run deploy-all-no-prod
```

OR deploy to all environments

```
yarn run deploy-all
```

## Backup Database

The development environment's database is seen as the source of truth for all the other environments. This is backed up as needed.

```
yarn run db-backup
```

## Restore Database

All environments will be restored with the database from the development environment, as discussed above.

```
yarn run db-restore-ENV
```

OR restore all environments except production

```
yarn run db-restore-all-no-prod
```

OR restore all environments

```
yarn run db-restore-all
```

## Testing

`NOTE: This is not yet implemented.`

```
yarn run test
```
