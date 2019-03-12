const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const dir = process.argv[2] || '.';
const app = next({ dev, dir });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/category/:id', (req, res) => {
      const actualPage = '/category';
      const queryParams = { id: req.params.id };

      app.render(req, res, actualPage, queryParams);
    });

    server.get('/shoot/:id', (req, res) => {
      const actualPage = '/shoot';
      const queryParams = { id: req.params.id };

      app.render(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
