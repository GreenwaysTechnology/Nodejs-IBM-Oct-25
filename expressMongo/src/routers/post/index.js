const express = require('express')
const postRouter = express.Router()
const { findAll, save, findById, update, remove } = require('../../services/post')

postRouter.get('/', async (req, res) => {
    try {
        const posts = await findAll()
        res.json(posts)
    }
    catch (err) {
        console.log(err)
        return res.status(500).json({ err: err })
    }
})
postRouter.post('/', async (req, res) => {
    const post = req.body
    try {
        const savedPost = await save(post)
        res.status(201).json(savedPost)
    } catch (err) {
        return res.status(500).json({ err: err })

    }
})
postRouter.get('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const post = await findById(id)
        if (post) {
            res.json(post)
        } else {
            res.status(404).json(`For ${id}  Post not available`)
        }
    }
    catch (err) {
        return res.status(400).json({ err: err })

    }
})

postRouter.put('/:id', async (req, res) => {
    const id = req.params.id
    const postInput = req.body

    try {
        const post = await update(id, postInput)
        res.json(post)
    }
    catch (err) {
        console.log(err)
        res.status(404).json({ err: err })
    }
})
postRouter.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        await remove(id)
        res.json({message:`${id} post has been deleted Succfully`})
    }
    catch (err) {
        res.status(400).json({ err: err.message })
    }
})

module.exports = postRouter
