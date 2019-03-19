# nextjs-simple-boilerplate

A Next.js, Firebase and Redux boilerplate that we use internally

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

## Export

```

yarn run build
yarn run export

```

In the `export` step, `robots.txt` and `sitemap.xml` will be created and assets will be copied from `./src/public` to `./dist`.

You will deploy the dist folder to your host.
