const connect = require('connect');
const serveStatic = require('serve-static');
const port = Math.floor(Math.random() * (9999 - 1001) + 1001);

connect()
  .use(serveStatic(__dirname))
  .listen(port, () =>
    console.log(`Server running on http://localhost:${port}`)
  );
