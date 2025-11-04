const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker()

//service schema
broker.createService({
    name: 'math',
    actions: {
        add() {
            return 10 + 10
        },
        multiply() {
            return 10 * 10
        },
        divide() {
            return 10 / 2
        }
    }
})

async function main() {
    try {
        await broker.start()
        const add = await broker.call('math.add')
        const multiply = await broker.call('math.multiply')
        console.log(add, multiply)

    }
    catch (err) {
        console.log(err)
    }
}
main()