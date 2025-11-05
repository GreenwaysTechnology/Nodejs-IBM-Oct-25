const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker({
    // transporter: "TCP"
    transporter: "nats://localhost:4222"

})

broker.createService({
    name: 'calculator',
    actions: {
        add: {
            async handler(ctx) {
                const { a, b } = ctx.params
                const result = await ctx.call('math.add', { a, b })
                return `Result is ${result} and invoked from ${broker.nodeID}`
            }
        }
    }
})


async function main() {
    try {
        await broker.start()
        //will start interactive commandline tool
        broker.repl()
    }
    catch (err) {
        console.log(err)
    }
}
main()