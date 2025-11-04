const { ServiceBroker } = require('moleculer')
const broker = new ServiceBroker()

//calculator calls math : calculator---->math

broker.createService({
    name: 'calculator',
    actions: {
        add: {
            async handler(ctx) {
                const { a, b } = ctx.params
                // const result = ctx.call('math.add', { a: a, b: b })
                const result = await ctx.call('math.add', { a, b })
                return `${result} and invoked from ${ctx.nodeID}`
            }
        }
    }
})


broker.createService({
    name: 'math',
    actions: {
        add: {
            handler(ctx) {
                const { a, b } = ctx.params
                return`${a + b} is from ${ctx.nodeID}`
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
