![Ninja-Template logo](https://raw.githubusercontent.com/rwu823/FFN-Ninja-Template/master/src/logo-720x240.png)

# Ninja Template
  This project is base on Node.js. To help you develop on template like a ninja with flowing speed :)

## Workflow
  We all know the current template workflow on FFN is inefficient. So what does `Ninja Template` do:
  
  `Ninja Template` watch your project directory, after change file it will automate upload, publish to your sandbox and reload browser. Feel magic, right?

## Prepare

  [git](http://msysgit.github.io/index.html)

  [node.js](http://nodejs.org/download/)
  
  Browser extension:
  
  `Chrome` [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
  
  `Firefox` [Scriptish](https://addons.mozilla.org/zh-tw/firefox/addon/scriptish/)
  
  If you already installed please skip this step

## Installation

  Install browser automate reload user script:
  
  [ffn-auto-reload.user.js](https://github.com/rwu823/FFN-Ninja-Template/raw/master/src/ffn-auto-reload.user.js)

  Clone this repo:

    $ git clone --depth 1 https://github.com/rwu823/FFN-Ninja-Template.git FFN

  Into the folder:

    $ cd FFN
    
  Make project folder, as example: `p12345`
  
    $ mkdir -p templates/p121345
    
  Install dependencies:

    $ npm install
    
## Configuration
  Edit ninja.js
  
  ```js
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
  
  // use new Ninja(option) create new project
  var p12345 = new Ninja({
    // set project directory, related path: ./templates/[project]
    project: 'p12345', 
    // abbreviation of sites on FFN, default is ffadult
    site: 'ffadult',
    // default is english
    lang: 'english' 
  })
  
  // project go
  p12345.go()
  ```
  
## Start App

    $ node ninja

## Coding
  Ok, All steps are finished, you can enjoy your coding now. Example here:
  
  Create a file: `debug.m.html` and save to `templates/p12345` folder 
  
  (recommend add .extname like `.htm` `.css` `.js`, it will support nice syntax color on editor )
  
  The file path just like:
  
  `templates/p12345/debug.m.html`
  
  Edit and open the browser check the result.

## Contributors
Rocky Wu <rwu.tw@ffn.com> - Core code development

Zizi Hsu <zhsu.tw@ffn.com> - Logo design

## Questions

  <rwu.tw@ffn.com>
