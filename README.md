![Ninja-Template logo](https://raw.githubusercontent.com/rwu823/FFN-Ninja-Template/master/src/logo-720x240.png)

# Ninja Template

  This project is base on Node.js. To help you develop on template like a ninja with flowing speed :)

## Workflow

  We all know the current template workflow on FFN is inefficient. So what does `Ninja-Template` do:
  
  `Ninja-Template` watch your project directory, after change file it will automate upload, publish to your sandbox and reload browser. Feel magic, right?


## Change Log

`Ninja-Tempalte` will increase new useful command in next. Please see the [Change log](https://github.com/rwu823/FFN-Ninja-Template/blob/master/changelog.md).

When you want to update new feature, just run below two:
      
    $ git pull; npm install
    
    

## Prepare

  [git](http://msysgit.github.io/index.html)

  [node.js](http://nodejs.org/download/)
  
  **Browser extension**:
  
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
    
  Make project folder, as example: `P12345`
  
    $ mkdir -p templates/P12345
    
  Install dependencies:

    $ npm install
    
## Configuration

  Copy `ninja.sample.js` as `ninja.js`
  
    $ cp ninja.sample.js ninja.js
    
  Modify `ninja.js`
 
    $ vim ninja.js
    
  
## Start App

    $ node ninja

## Coding
  Ok, All steps are finished, you can enjoy your coding now. Example here:
  
  Create a file: `debug.m.html` and save to `templates/p12345` folder 
  
  (recommend add .extname like `.htm` `.css` `.js`, it will support nice syntax color on editor )
  
  The file path just like:
  
  `templates/p12345/debug.m.html`
  

## Command Line
  `Ninja-Template` support some useful commands, help you to develop more efficient.
  
  Please see the [command-line.md](https://github.com/rwu823/FFN-Ninja-Template/blob/master/command-line.md).
  
    
## Web Notification
   Basically `Ninja-Template` support status log on console. But if that's not enough for you, `Ninja-Template` also support **Web Notification** on `Chrome` and `Firefox`, just allow the browser notification if you need.

## Contributors
Code Core:
  > Rocky Wu <rwu.tw@ffn.com> 

Logo Design:
  > Zizi Hsu <zhsu.tw@ffn.com> 

  

## Questions

  <rwu.tw@ffn.com>