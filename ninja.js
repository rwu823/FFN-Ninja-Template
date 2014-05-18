var Ninja = require('./src/ninja-core')

Ninja.set({
  developer: 'rwu.tw',
  password: '***',
  host: 'dev25',
  port: '21321'
})

var p12345 = new Ninja({
  project: 'p12345',
  site: 'ffadult',
  lang: 'english'
})


p12345.go()
