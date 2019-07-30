const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = require('./config.js').server.port
const {productRtriver} = require('./controllers/product')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// Add route code Here
app.get('/', (req, res) => {
   res.send('Welcome to Our SCHOOL API');
});

app.get('/product', [
    productRtriver
]);

app.listen(port, () => {
   console.log(`We are live at 127.0.0.1:${port}`);
});