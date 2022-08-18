const express = require('express');
const LoginUser = require('./controllers/users/LoginUser');


const app = express();

require('dotenv').config();

app.use(express.json());

const NewUser = require('./controllers/users/NewUser');
const NewUserAdmin = require('./controllers/users/NewUserAdmin');

app.post('/register', NewUser);

app.post('/register/Admin', NewUserAdmin);

app.post('/login', LoginUser);

app.use((error, req, res, _) =>{
    console.error(error);

    res.status(error.httpStatus || 500);

    res.send({
        status: 'Error',
        message: error.message
    })

})


app.use((req, res) => {

    res.status(404);

    res.send({
        status: 'Error',
        message: 'Not found :(',
    });
});


app.listen(4000), () => {
    console.log(`Server listening at http://localhost:4000`);
 
 };
 