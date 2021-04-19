// library app
const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bodyparser = require('body-parser');
const booksRouter = require('./src/routes/bookRoutes');
const authorRouter = require('./src/routes/authorRoutes');
const addBookRouter = require('./src/routes/addBookRouter');
const addAuthorRouter = require('./src/routes/addAuthorRouter');
const port = process.env.PORT || 5000;

app.use(express.urlencoded({extended:true}));

app.use(bodyparser.json());

app.use(express.json());

app.use(cors());

app.use('/books',booksRouter);

app.use('/authors',authorRouter);


app.use('/addbook',addBookRouter);

app.use('/addauthor', addAuthorRouter);

username='admin';
password='admin';

app.get('/', function(req,res){
   res.send('Welcome')
});

app.post('/login', (req, res) => {
    let userData = req.body
    
      
        if (!username) {
          res.status(401).send('Invalid Username')
        } else 
        if ( password !== userData.password) {
          res.status(401).send('Invalid Password')
        } else {
          let payload = {subject: username+password}
          let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({token})
        }
      
})

app.listen(port, () => {console.log("server ready at " + port)});