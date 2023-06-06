const app = require('./lib/app').app;

const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

