const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const UserSchema = require('./db/User')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/pawcare')

app.post('/sign-up', (req, res) => {
    UserSchema.create(req.body)
     .then(user => res.json(user))
     .catch(err => res.json(err))
})

app.post('/sign-in', (req, res) => {
    const { email, password } = req.body
    UserSchema.findOne({ email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json('Success')
                } else {
                    res.json('Incorrect Password')
                }
            } else {
                res.json('User Not Found')
            }
        })
        .catch(err => res.json(err))
})


app.listen(3000, () => {
    console.log('Server is running on port 3000')
})