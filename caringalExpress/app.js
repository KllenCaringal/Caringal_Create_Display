const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const routes = require('./routes/router')
const port = 3500;

app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended:true}));
app.use('/', routes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})
