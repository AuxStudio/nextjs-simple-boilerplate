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
rm -R .git
```

2. Add your own.

```
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

TODO: Automate this step.

1. Update `./package.json` name, description, repository etc.
2. Update `./README.md` with your project title, description and repo url.
3. In `./README.md`, remove the `Get Started` section.
4. Search TODOS and replace as necessary.
5. Update `./src/app/static/manifest.json` name and short_name.
6. Update `./src/app/static/site.webmanifest` name and short_name.

- Analytics tracking ID
- Use and delete tools folder
- Firebase setup with .env or multiple envs
- Delete docs folder
