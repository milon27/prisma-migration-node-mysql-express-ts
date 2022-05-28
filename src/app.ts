import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { Post, PrismaClient } from '@prisma/client'

dotenv.config()
const app = express()
const prisma = new PrismaClient()

app.use(cors({ origin: true }))
app.use(express.json())


app.get('/user', async (req, res) => {
    const data = await prisma.user.create({
        data: {
            uname: "mioln",
            password: "123"
        }
    })
    res.send(data)
})

app.get('/', async (req, res) => {
    const data = await prisma.post.findMany()
    res.send(data)
})

app.get('/add/:uid', async (req, res) => {
    const { uid } = req.params
    if (!uid) {
        res.send("who are you?")
    }
    const newData = {
        title: "new post ",
        content: "new post content",
        userId: parseInt(uid),
        createdAt: new Date()

    } as Post

    await prisma.post.create({
        data: newData
    })

    res.send({
        port: process.env.PORT
    })
})

const port = process.env.PORT || 2828
app.listen(port, () => console.log(`running on ${port}`))