var Ninja = require('./src/ninja-core')

// set default config for development
Ninja.set({
  developer: 'rwu.tw', // set your account on FFN
  password: '***', // set your password
  host: 'dev25', // set your sandbox host
  port: '21321', // set you sandbox port

  mapLocal: {  // map local file to remote, related path: ./debug/[file]
    'test.css': 'http://example.com/test.css',
    'test.js': 'http://example.com/test.js'
  }
})

if(typeof Ninja[Ninja.cmd] === 'function') return Ninja[Ninja.cmd]()


// use new Ninja(option) create new project
var P12345 = new Ninja({
  project: 'P12345', // set project directory, related path: ./templates/[project]
  site: 'ffadult', // abbreviation of sites on FFN, default is ffadult
  lang: 'english' // default is all languages
})

// project go
P12345.go()