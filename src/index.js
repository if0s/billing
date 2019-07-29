const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const {pool} = require('./services/db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// Add route code Here
app.get('/', (req, res) => {
   res.send('Welcome to Our SCHOOL API');
});

app.get('/product', (req, res) => {
     pool.connect((err, client, done) => {
       const query = 'SELECT * FROM product';
       client.query(query, (error, result) => {
         done();
         if (error) {
           res.status(400).json({error})
         } 
         if(result.rows < '1') {
           res.status(404).send({
           status: 'Failed',
           message: 'No student information found',
           });
         } else {
           res.status(200).send({
           status: 'Successful',
           message: 'Students Information retrieved',
           students: result.rows,
           });
         }
       });
     });
   });

app.listen(port, () => {
   console.log(`We are live at 127.0.0.1:${port}`);
});