# Setup guide

This is a work in progress.

If anything is unclear or does not work, please let me know via [email](mailto:shaun@aux.co.za) or create an issue/PR and I will attend to it as soon as I can.

## Table of contents

1.  [Clone project](#1-clone-project)
2.  [Setup git](#2-setup-git)
3.  [Install dependencies](#3-install-dependencies)
4.  [Make it your own](#4-make-it-your-own)

## 1. Clone project

```
git clone https://github.com/AuxStudio/nextjs-simple-boilerplate.git PROJECT_NAME
```

## 2. Setup git

1. Remove the original git.

```
cd PROJECT_NAME
sudo rm -R .git
```

2. Add your own.

```
git init
git add .
git commit -m "Initialise project"
git remote add origin NEW_GIT
git push -u origin master
```

## 3. Install dependencies

```
yarn
```

## 4. Make it your own

FIXME: Automate this step. Take a look at cookie-cutter.
TODO: These steps are stuffed

1. Update `./package.json` name, description, repository etc.
2. Update `./README.md` with your project title, description and repo url. Remove everything you don't need.
3. Search TODOS and replace as necessary.
4. Update `./src/app/static/manifest.json` name and short_name.
5. Update `./src/app/static/site.webmanifest` name and short_name.
6. Setup firebase remotely and locally:

### Remotely

Add your app to the Firebase console.

### Locally

```
firebase init
```

Choose the hosting option.

7. Add env files as appropriate (ie. you do not have to add all of the below, just add what you need). Create the following files:

`./src/app/.env.dev`
`./src/app/.env.testing`
`./src/app/.env.staging`
`./src/app/.env.production`

8. Populate the env files:

\*Replace `X` as needed.

```
REACT_APP_ENV=X

REACT_APP_API_KEY=X
REACT_APP_AUTH_DOMAIN=X
REACT_APP_DATABASE_URL=X
REACT_APP_PROJECT_ID=X
REACT_APP_STORAGE_BUCKET=X
REACT_APP_MESSAGING_SENDER_ID=X

REACT_APP_GA_TRACKING_ID=X
REACT_APP_GTM_ID=X
```

9. Add snippets to VSCode (see [Snippets](./tools/snippets.json)).

10. Remove boilerplate files:

```
rm -R ./docs/*
rm -R ./tools/*
rm ./CHANGELOG.md
rm ./CONTRIBUTING.md
rm ./CODE_OF_CONDUCT.md
```
