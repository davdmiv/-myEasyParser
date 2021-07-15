require('dotenv').config()
const express = require('express')
const { sequelize, User, Rule, ChangeNote } = require('./db/models/index')
const cors = require('cors')
const PORT = process.env.PORT || 5000
const router = require('./routes/insdex')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static/changenotes')))
app.use('/api', router)

//Обработка ошибок, последний Middleware! Потому как не вызывается next() и ответ уходит на клиент
app.use(errorHandler)

app.get('/', (req, res) => {
  res.status(200).json({ message: 'WORCKING!!!' })
})

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
  } catch (e) {
    console.log(e)
  }
}

start()
