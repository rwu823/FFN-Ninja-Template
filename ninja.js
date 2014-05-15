var Ninja = require('./src/ninja-core')

Ninja.set({
  developer: 'rwu.tw',
  password: 'Cv720823',
  host: 'dev25',
  port: '21321'
})

var CD19994 = new Ninja({
  project: 'CD-19994',
  site: 'ffadult',
  lang: 'english'
})


CD19994.go()