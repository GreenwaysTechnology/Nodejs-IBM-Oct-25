const Post = require('../../models/Post.model')

class PostService {

    async findAll() {
        return Post.find({})
    }
    async save(post) {
        const newPost = new Post({
            title: post.title,
            content: post.content
        })
        await newPost.save()
        return newPost
    }
    async findById(id) {
        const post = await Post.findOne({ _id: id })
        return post
    }
    async update(id, { title, content }) {
        const post = await Post.findOne({ _id: id })
        if (!post) {
            throw Error()
        }
        if (title) {
            post.title = title
        }
        if (content) {
            post.content = content
        }
        await post.save()
        return post
    }
    async remove(id) {
        const post = await Post.findOne({ _id: id })
        if (post) {
            await Post.deleteOne({ _id: id })
        } else {
            throw Error("No Document Found")
        }

    }
}
module.exports = new PostService()