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
                    "hello": "hello.sayHello",
                    "hai": "hai.sayHai",
                    "greet": "greeter.sayGreet"
                }
            }
        ]
    }
})
broker.createService({
    name: 'hello',
    actions: {
        sayHello() {
            return "Hello"
        },
        helloOnceAgain() {
            return 'hello again'
        }
    }
})
broker.createService({
    name: 'hai',
    actions: {
        sayHai() {
            return "Hai"
        }
    }
})
broker.createService({
    name: 'greeter',
    actions: {
        sayGreet() {
            return "Greet"
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