
const { promisify } = require('util')
const ora = require('ora')



module.exports = async (repo , desc)=>{
  const loading =  ora('download...')
  const download =promisify(require('download-git-repo')) ;
  loading.start();
  await download(repo,desc)
  loading.succeed()
}