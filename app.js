const express = require('express');
const app = express();
const earlyHints = require('early-hints');
const morgan = require('morgan');
const path = require('path');

app.use(morgan('tiny'));
app.use(earlyHints(
  [...Array(5)].map((_, i) => ({ path: `/image.${i+1}.png`, rel: 'preload'}))
));
app.use(express.static(path.join(__dirname, 'public')));
app.listen(3000);
