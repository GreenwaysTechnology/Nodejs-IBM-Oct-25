
function blockMe(message) {
    console.log(message)
}

function login(userName, password) {
    return new Promise((resolve, reject) => {
        if (userName === 'admin' && password === 'admin') {
            setTimeout(resolve, 1000, 'login is success')
        } else {
            setTimeout(reject, 1000, 'login is failed')

        }
    })
}


function main() {
    blockMe('start')
    login('admin', 'admin').then(status => console.log(status)).catch(res => console.log(res))
    blockMe('end')
}
main()