global.l = console.log
const express = require('express')
const app = express()
const reload = require('reload')

reload(app)

app.use(express.static('./src/'))


app.get('/*', (req, res, next) => {
	l('request : ', req.url)
	res.sendFile(__dirname + '/src/index.html')
})




app.listen(3000)

