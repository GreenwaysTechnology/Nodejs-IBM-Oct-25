const { ServiceBroker } = require('moleculer')
const ApiGateWay = require('moleculer-web')
const DbService = require('moleculer-db')
const mongoose = require('mongoose')
const MongooseAdapter = require('moleculer-db-adapter-mongoose')

const DATABASE_URL = "mongodb+srv://subugee:subugee222@cluster0.shfpbhv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority&appName=Cluster0"

const broker = new ServiceBroker({
    serializer: "JSON", // not necessary to set, because it is the default,
    logger: 'Console',

})

//create service - db service
broker.createService({
    name: 'postDb',
    mixins: [DbService],
    adapter: new MongooseAdapter(DATABASE_URL),
    model: mongoose.model('Post', mongoose.Schema({
       
        title: {
            type: String
        },
        content: {
            type: String
        },
        votes: {
            type: Number, default: 0
        }
    })),
    afterConnected() {
        this.logger.info('Database successfully Connected')
    },
    stopped() {
        this.logger.info("Database successfully disconnected")
        console.log(this.adapter.connection)
    }
})

//rest api to talk to database
broker.createService({
    name: 'posts',
    actions: {
        list: {
            rest: 'GET /',
            async handler(ctx) {
                const posts = await ctx.call('postDb.find')
                return posts
            }
        },
        create: {
            rest: 'POST /',
            async handler(ctx) {
                const { title, content, votes } = ctx.params
                const res = await ctx.call('postDb.create', {
                    title: title,
                    content: content,
                    votes: votes
                })
                return res
            }
        },
        get: {
            rest: 'GET /:id',
            async handler(ctx) {
                const id = ctx.params.id
                console.log(id)
                const post = await ctx.call('postDb.find', { _id: id })
                // console.log(post)
                return post
            }
        }
        //TASK ADD UPDATE, DELETE code
    }
})


broker.createService({
    name: 'ApiGateWay',
    mixins: [ApiGateWay],
    settings: {
        routes: [
            {
                path: '/api',
                aliases: {
                    //custom end point configuration
                    "REST posts": "posts"
                },
                autoAliases: false
            }
        ]
    }
})

async function main() {
    try {
        await broker.start()
    }
    catch (err) {
        console.log(err)
    }
}
main()