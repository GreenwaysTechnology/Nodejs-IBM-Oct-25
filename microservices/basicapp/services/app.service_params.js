const { ServiceBroker } = require('moleculer')
const broker = new ServiceBroker()

broker.createService({
    name: 'math',
    actions: {
        add(ctx) {
            const { a, b } = ctx.params
            // console.log(ctx.params)
            //return ctx.params.a + ctx.params.b
            return a + b
        }
    }
})

async function main() {
    try {
        await broker.start()
        const add = await broker.call('math.add', { a: 10, b: 10 })
        console.log(add)

    }
    catch (err) {
        console.log(err)
    }
}
main()