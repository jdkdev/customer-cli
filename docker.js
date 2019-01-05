const sh = require('shelljs')
let _compose = 'docker-compose '

const start = () => sh.exec(_compose + 'up -d')
const stop = () => sh.exec(_compose + 'down')

module.exports = { start, stop }
