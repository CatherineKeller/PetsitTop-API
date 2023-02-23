const debug = require('debug')('opet:server'); // to log debug messages

require('dotenv').config(); // variables d'environnement
const express = require('express'); // express
// const cors = require('cors'); // cors
const router = require('./app/routers'); // router

const app = express();
const PORT = process.env.PORT || 3000;

// For cross origin requests
// app.use('/', cors({
//   origin: '*', // allow all origins
// }), router);

// Body Parser
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// parse application/json
app.use(express.json());

// app.post('/example', (req, res) => {
//   res.send(req.body);
// });

// pour ne plus utiliser controllerHandler on pass next (=tous les middlewares suivants) dans try:
// app.use((req, res, next) => {
//   try {
//     next();
//   } catch (err) {
//     debug(err.message);
//     const status = err.statusCode || 500;
//     const { message } = err;
//     res.status(status).json({ error: message });
//   }
// });

// Routage
app.use(router);

app.listen(PORT, () => {
  debug(`App listening on port http://localhost:${PORT}`);
});