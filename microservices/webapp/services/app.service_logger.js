const { ServiceBroker } = require('moleculer')
const ApiGateWay = require('moleculer-web')

// const broker = new ServiceBroker({
//     serializer: "JSON", // not necessary to set, because it is the default
//     logger: 'Console'
// })
// const broker = new ServiceBroker({
//     serializer: "JSON", // not necessary to set, because it is the default
//     logger: 'File'
// })

const broker = new ServiceBroker({
    serializer: "JSON", // not necessary to set, because it is the default
    logger: 'Pino'
})

// const broker = new ServiceBroker({
//     serializer: "JSON", // not necessary to set, because it is the default
//     logger: 'Bunyan'
// })

broker.createService({
    name: 'productservice',
    actions: {
        findAll: {
            async handler(ctx) {
                const products = await fetch('https://dummyjson.com/products')
                const productsJson = await products.json()
                return productsJson
            }
        },
        findById: {
            async handler(ctx) {
                const id = Number(ctx.params.id)
                const url = `https://dummyjson.com/products/${id}`
                const response = await fetch(url)
                const product = await response.json()
                return product
            }
        }
    }
})

broker.createService({
    name: 'products',
    actions: {
        list: {
            rest: "GET /",
            async handler(ctx) {
                const products = await ctx.call('productservice.findAll')
                // console.log('products findAll is called')
                this.logger.info('products findAll is called')
                return products
            }
        },
        get: {
            rest: "GET /:id",
            async handler(ctx) {
                const { id } = ctx.params
                const product = await ctx.call('productservice.findById', { id: id })
                return product

            }
        },
        create: {
            rest: "POST /",
            handler(ctx) {
                const payload = ctx.params
                // console.log(payload)
                //    console.log(this.logger)
                this.logger.info(payload)
                return 'Post  Products'
            }
        },
        update: {
            rest: "PUT /:id",
            handler(ctx) {
                return 'Update all Products'
            }
        },
        remove: {
            rest: "DELETE /:id",
            handler(ctx) {
                return 'Remove  Products'
            }
        }
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
                },
                autoAliases: true
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