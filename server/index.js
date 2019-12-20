require('dotenv').config()

const express = require('express')
const app = express()
const massive = require('massive')
const { DATABASE_CONNECTION } = process.env
const controller = require('./controller')

//massive
massive(DATABASE_CONNECTION)
    .then(response => {
        app.set('db', response)
        console.log('db connected 😂😂')
    })
    .catch(err => console.log)

// massive()

//parser
app.use(express.json())

//endpoints
app.get('/api/inventory', controller.getInventory)

app.post('/api/product', controller.createProduct )

app.delete('/api/product/:id', controller.deleteProduct)

app.put('/api/product/:id', controller.updateProduct)


//listen
app.listen(5050, () => console.log('Listening on port 5050...'))