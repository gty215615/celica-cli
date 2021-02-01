const { promisify } = require('util')

const figlet = promisify(require('figlet'))
const chalk = require('chalk')
const clear = require('clear')

const log = (text) => { console.log(chalk.green(text)) };

const download = require('./download')

module.exports = async (name) => {
    clear();
    const data = await figlet('celica');
    log(data)
    await download('github:gty215615/cli-template#main', name)
}