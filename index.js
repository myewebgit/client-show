const express = require('express');
const cors = require ('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
    res.send('I am working with node; I would like to work with mongo db. Now I am getting auto update!!!........... It is really nice.')
});

const users =[
    {id:1, name: 'Sabana', email: 'sbana@gmail.com', Phone: '01788988152'},
    {id:2, name: 'Sadana', email: 'sadana@gmail.com', Phone: '01788988152'},
    {id:3, name: 'Sana', email: 'sana@gmail.com', Phone: '01788988152'},
    {id:4, name: 'Sabnoor', email: 'sbanoor@gmail.com', Phone: '01788988152'},
    {id:5, name: 'Sabina', email: 'sbaina@gmail.com', Phone: '01788988152'},
    {id:6, name: 'Sohana', email: 'sohana@gmail.com', Phone: '01788988152'},
    {id:7, name: 'Sabnan', email: 'sabnan@gmail.com', Phone: '01788988152'},
]
// search by quary paramenter
app.get('/users', (req,res)=>{
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched);
    }
    else{
        res.send(users);
    }
    
});
app.get('/user/:id', (req,res)=>{
    console.log(req.params);
    // const id = req.params.id;
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
});


app.post('/user', (req,res)=>{
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.get('/fruits', (req,res)=>{
    res.send(['mango','apple','orange'])
});

app.get('/fruits/mango/fazle', (req,res)=>{
    res.send('Getting ripe sour fruites in summer')
});


app.listen(port, () =>{
    console.log('Listening to port',port);
});