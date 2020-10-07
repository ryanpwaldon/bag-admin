const httpsLocalhost = require('https-localhost')()

module.exports = (api, options) => {
  api.registerCommand('serve:custom', async args => {
    const certs = await httpsLocalhost.getCerts()
    options.devServer.disableHostCheck = true
    options.devServer.https = certs
    options.devServer.port = 443
    options.devServer.host = 'localhost'
    await api.service.run('serve', args)
  })
}

module.exports.defaultModes = {
  'serve:custom': 'development'
}
