var Ninja = require('./src/ninja-core')

// set default config for development
Ninja.set({
  // set your account on FFN
  developer: 'rwu.tw',
  // set your password
  password: '***',
  // set your sandbox host
  host: 'dev25',
  // set you sandbox port
  port: '21321'
})

if(typeof Ninja[Ninja.cmd] === 'function') return Ninja[Ninja.cmd]()


// use new Ninja(option) create new project
var P12345 = new Ninja({
  // set project directory, related path: ./templates/[project]
  project: 'P12345',
  // abbreviation of sites on FFN, default is ffadult
  site: 'ffadult',
  // default is english
  lang: 'english'
})

// project go
P12345.go()