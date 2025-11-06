const { ServiceBroker } = require('moleculer')
const ApiGateWay = require('moleculer-web')

const broker = new ServiceBroker()

broker.createService({
    name: 'ApiGateWay',
    mixins: [ApiGateWay],
    settings: {
        routes: [
            {
                path: '/api',
                whitelist: [
                    "**" //Allow all service actions
                ],
                aliases: {

                },
                autoAliases: true
            }
        ]
    }
})

broker.createService({
    name: 'products',
    actions: {
        list: {
            rest: 'GET /',
            handler(ctx) {
                return 'Get all Products'
            }
        },
        get: {
            rest: 'GET /:id',
            handler(ctx) {
                const { id } = ctx.params
                return `products id is ${id}`
            }
        },
        create: {
            rest: 'POST /',

            handler(ctx) {
                const params = ctx.params
                console.log(params)
                return params
            }
        },
        update: {
            rest: 'PUT /:id',
            handler(ctx) {
                const { id } = ctx.params
                return `products id is ${id}`
            }
        },
        remove: {
            rest: 'DELETE /:id',
            handler(ctx) {
                const { id } = ctx.params
                return `products id is ${id}`
            }
        }
    }
})

broker.createService({
    name: 'customers',
    actions: {
        list: {
            rest: 'GET /',
            handler(ctx) {
                return 'Get all Customers'
            }
        },
        get: {
            rest: 'GET /:id',

            handler(ctx) {
                const { id } = ctx.params
                return `Customers id is ${id}`
            }
        },
        create: {
            rest: 'POST /',
            handler(ctx) {
                const params = ctx.params
                console.log(params)
                return `Customers Sava`
            }
        },
        update: {
            rest: 'PUT /:id',
            handler(ctx) {
                const { id } = ctx.params
                return `Customers id is ${id}`
            }
        },
        remove: {
            rest: 'DELETE /:id',

            handler(ctx) {
                const { id } = ctx.params
                return `Customers id is ${id}`
            }
        }
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