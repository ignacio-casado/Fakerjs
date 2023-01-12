
const express = require('express')
const morgan = require('morgan')
const handlebars= require('express-handlebars')
const router = require('./controller/products.js') 
const path = require('path')

//app
const app = express();

//views
app.use(express.static(path.join(__dirname, 'public')))
app.use('/routerData',router)
app.engine('handlebars',handlebars.engine())
app.set('views',path.join(__dirname,'views'))
app.set('view engine','handlebars')

//morgan
app.use(morgan(":method :url :status :res[content-length] - :response-time ms"))
morgan.token('host', function(req, res) {
    return req.hostname;
});

//PORT
const PORT = process.env.PORT || 8080

//Listen port
app.listen(PORT,()=>{
    console.log(`Server up running on port ${PORT}`)
})


app.get('/', (req,res)=>{
    res.send('hola mundo')
})