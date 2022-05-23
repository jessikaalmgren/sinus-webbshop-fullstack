const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors')
const products = require('./routes/products.js')
const hoodies = require('./routes/hoodies.js')
const shirts = require('./routes/shirts.js')
const skateboards = require('./routes/skateboards.js')
const caps = require('./routes/caps.js')
const accessories = require('./routes/accessories.js')


const PORT = 1226
const staticFolder = path.join(__dirname, 'frontend')

//Middleware
app.use(express.json())
app.use(cors())
app.use(express.static(staticFolder))

app.use(express.urlencoded({extended: true}))

app.use((req, res, next) => {
	console.log(`${req.method} ${req.url}`, req.params);
	next()
})

//Routes
app.get('/', (req, res) => {
	res.send('Fullstack project')
})

//REST API for /products
app.use('/products', products)
app.use('/hoodies', hoodies)
app.use('/shirts', shirts)
app.use('/skateboards', skateboards)
app.use('/caps', caps)
app.use('/accessories', accessories)


app.listen(PORT, () => {
	console.log('Server is listening on port ' + PORT);
})

