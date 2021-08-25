const express = require('express')
const path = require('path')
const app = express()
const users = require('./utils/users')
const port = process.env.PORT || 3000
const titu = 'inxicode'

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))

app.get('', (req, res) => {
    res.render('index', {
        title: `${titu}`
    })
})

app.get('/fullStack', (req, res) => {
    res.render('pages/fullStack', {
        title:`${titu}|Fullstack`
    })
})

app.get('/blockChain', (req, res) => {
    res.render('pages/blockChain', {
        title:`${titu}|Blockchain`
    })
})

app.get('/gis', (req, res) => {
    res.render('pages/gis', {
        title:`${titu}|GIS`
    })
})

app.get('/products', (req, res) => {
    
    users.getUsers((error, data) => {
    return res.render('pages/products', {
            title:`${titu}|Criptomonedas`,
            users: data
        })
}) 
})


app.listen (port,()=>{
    console.log('este es el puerto 3000')
})