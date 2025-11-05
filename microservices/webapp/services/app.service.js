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
                    "GET products": "products.list",
                    "GET products/:id": "products.get",
                    "POST products": "products.create",
                    "PUT products/:id": "products.update",
                    "DELETE products/:ID": "products.remove"
                }
            }
        ]
    }
})

broker.createService({
    name: 'products',
    actions: {
        list: {
            handler(ctx) {
                return 'Get all Products'
            }
        },
        get: {
            handler(ctx) {
                const { id } = ctx.params
                return `products id is ${id}`
            }
        },
        create: {
            handler(ctx) {
                const params = ctx.params
                console.log(params)
                return params
            }
        },
        update: {
            handler(ctx) {
                const { id } = ctx.params
                return `products id is ${id}`
            }
        },
        remove: {
            handler(ctx) {
                const { id } = ctx.params
                return `products id is ${id}`
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