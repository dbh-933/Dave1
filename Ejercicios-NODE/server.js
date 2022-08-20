const express = require('express');

const app = express();

require('dotenv').config();

app.use(express.json());

const NewUser = require('./controllers/users/NewUser');
const NewUserAdmin = require('./controllers/users/NewUserAdmin');
const LoginUser = require('./controllers/users/LoginUser');
const GetUser = require('./controllers/users/GetUser');

const isAuth = require('./Middlewares/isAuth');
const CanEditUser = require('./Middlewares/CanEditUser');
const GetExperiencias = require('./controllers/experiencias/GetExperiencias');
const DeleteExperiencia = require('./controllers/experiencias/DeleteExperiencias');
const IsAdmin = require('./Middlewares/IsAdmin');

const NewCompany = require('./controllers/empresa/NewCompany');
const DeleteCompany = require('./controllers/empresa/DeleteCompany');

app.post('/register', NewUser); //Registra usuario

app.post('/register/Admin', NewUserAdmin); //Registra admin

app.post('/login', LoginUser); //Login usuario

app.get('/users/:idUser', GetUser); //Recuperar datos del usuario

app.put('/users/:idUser', isAuth, CanEditUser);//Modificar usuario

app.get('/experiencias', GetExperiencias);

app.delete('/experiencias/:idExperiencia', isAuth, IsAdmin, DeleteExperiencia);

app.post('/empresa', isAuth, IsAdmin, NewCompany);

app.delete('/empresa/:idEmpresa', isAuth, IsAdmin, DeleteCompany);

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


app.listen(4000, () => {
    console.log(`Server listening at http://localhost:4000`);
 
 });
 