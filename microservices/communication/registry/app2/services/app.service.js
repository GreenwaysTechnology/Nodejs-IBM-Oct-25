const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker({
    transporter: "TCP",
    registry: {
        // discoverer: "Local"
        discoverer: "redis://localhost:6379"

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
        broker.repl()
    }
    catch (err) {
        console.log(err)
    }
}
main()