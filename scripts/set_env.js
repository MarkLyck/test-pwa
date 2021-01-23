var fs = require('fs')

var newEnv = process.argv[2]
fs.readFile(`./env/common.env`, function (err, commonBuf) {
  var commonData = commonBuf.toString()
  fs.readFile(`./env/${newEnv}.env`, function (err, buf) {
    if (err) {
      console.log('There is no such .env file:', `${newEnv}.env`)
      console.log('valid environments:\n')
      fs.readdir('./env', (_err, files) => {
        files.forEach((file) => {
          console.log(file.replace('.env', ''))
        })
        console.log('\n')
      })
    } else {
      var data = buf.toString() + '\n\n\n' + commonData
      fs.writeFile('.env', data, (err) => {
        if (err) console.log(err)

        console.log(`Env set to: ${newEnv}`)
      })
    }
  })
})
