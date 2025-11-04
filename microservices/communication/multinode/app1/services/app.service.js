const { ServiceBroker } = require('moleculer')
const broker = new ServiceBroker()

broker.createService({
    name: 'calculator',
    actions: {
        add: {
            async handler(ctx) {
                const { a, b } = ctx.params
                const result = await ctx.call('math.add',{a,b})
                return result
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