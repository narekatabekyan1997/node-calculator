const express = require('express');

const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const routes = require('./Routes');

const app = express();
app.use(bodyParser.json(
  {
    parameterLimit: 1000000,
    limit: 1024 * 1024 * 1024,
    extended: true,
  },
));
app.use(bodyParser.urlencoded(
  {
    extended: true,
    parameterLimit: 1000000,
    limit: 1024 * 1024 * 1024,
  },
));

app.use(routes);

app.listen(PORT, () => { console.log(`Server listening on port ${PORT}`); });
