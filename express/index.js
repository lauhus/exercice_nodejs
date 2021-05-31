const express = require('express');
const bodyParser = require('body-parser')


var app = new express();

app.set('views', './vue')
app.set('view engine', 'ejs')

app.use(express.static('./front'))
app.use(bodyParser.urlencoded({ extended : false}))
app.use(bodyParser.json())

app.get('/toto', (req , res) => {
    res.render("monTpl", {tableau : ["toto", "bob" , "rocky"]})
})

app.listen(8081)