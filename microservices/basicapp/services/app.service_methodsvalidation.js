const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker({
    hotReload: true
})

broker.createService({
    name: 'math',
    actions: {
        multiply: {
            //here we can add extra meta data about this method
            //validation logic
            params: {
                a: {
                    type: 'number',
                    positive: true,
                    integer: true,
                },
                b: 'number'                
            },
            handler(ctx) {
                const { a, b } = ctx.params
                return a * b
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