import os from 'os'

function vers() {
    if (os.type() === 'Windows_NT') {
        return "Привет, юзер. Вижу ты зашел с Windows"
    }
    if (os.type() === 'Linux') {
        return "Привет, юзер. Вижу ты зашел с линукс"
    }
    if (os.type() === 'Darwin') {
        return "Привет, юзер. Вижу ты зашел с MacOS"
    }
}

export default vers