const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const path = require('path')

const port = 5000;

app.use(express.static('public'))


// Set template engine
app.set('view engine','hbs')
app.engine('hbs',hbs({
    extname:'hbs',
    defaultLayout:'main',
    layoutsDir:__dirname + '/views/layouts',
    partialsDir:__dirname +'/views/partials'
}))


app.get('/',(req,res)=>{
    res.render('index',{
        class:'active'
    })
})
app.get('/weather',(req,res)=>{
    res.render('weather')
})
app.get('/about',(req,res)=>{
    res.render('about')
})


app.get('*',(req,res)=>{
    res.render('notFound')
})


app.listen(port,()=>{
    console.log(`Listening the port ${port}`)
})