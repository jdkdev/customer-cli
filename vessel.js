const sh = require('shelljs')

const pwd = () => {
    let pwd = sh.pwd()
    sh.echo(pwd)

    let osOptions = { 'Linux': 'linux', 'Darwin': 'mac' }
    let unameout = sh.exec('uname -s')
    let os = unameout || null

    if (! os) {
        sh.echo('Unsupported system type')
        sh.echo('System must be a Macintosh, Linux or Windows')
        sh.echo('')
        sh.echo('System detection determined via uname command')
        sh.echo('If the following is empty, could not find uname command: $(which uname)')
        sh.echo('Your reported uname is:' + sh.exec('uname -s'))
    }

    let compose = 'docker-compose'

    sh.exec('docker ps')
}


module.exports = { pwd }
