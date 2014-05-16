// ==UserScript==
// @id             ffn-auto-reload
// @name           ffn-auto-reload
// @version        2014.5.13
// @author         Rocky Wu <rwu.tw@ffn.com>
// @description    Automate reload browser when the sandbox published
// @website        https://github.com/rwu823/FFN-Ninja-Template
// @updateURL      https://raw.githubusercontent.com/rwu823/FFN-Ninja-Template/master/ffn-auto-reload.user.js
// @icon           https://raw.github.com/rwu823/FFN/master/template/assets/favicon.png

// @include        *adultfriendfinder.com*
// @include        *alt.com*
// @include        *friendfinder.com*
// @include        *asiafriendfinder.com*
// @include        *seniorfriendfinder.com*
// @include        *outpersonals.com*
// @include        *amigos.com*
// @include        *frenchfriendfinder.com*
// @include        *germanfriendfinder.com*
// @include        *filipinofriendfinder.com*
// @include        *indianfriendfinder.com*

// @run-at         document-end
// ==/UserScript==

'use strict'
!function(init){
  var script = document.createElement('script')
  script.src = 'http://rwu823.github.io/lib/js/socket.io.js'
  document.head.appendChild( script )

  script.onload = init
}(function(){

  var Socket = io.connect('http://localhost:35729'),
    warn = function(){
      var args = ['%c[Ninja-Template]', 'color:green;'].concat( [].slice.call(arguments) )

      console.warn.apply(console, args)
    },

    err = function(){
      var args = ['%c[Ninja-Template]', 'color:red;'].concat( [].slice.call(arguments) )

      console.error.apply(console, args)
    }

  Socket.on('ninja-template', function(o){
    return ({
      'save-local': function(){
        warn('Save local:', o.file)
      },

      'error-save-local': function(){
        err('Error', o.statusCode, 'save local, waiting for try again')
      },

      'publish': function(){
        warn('Publish to sandbox (' + o.site + '-' + o.lang + '):', o.file)
      },

      'error-publish': function(){
        err('Error', o.statusCode, 'publish, waiting for try again')
      },

      'reload': function(){
        warn('Reloading browser...')
        location.reload()
      }
    })[o.act]()
  })

  document.cookie = 'debug_cookie_perf_off=1;path=/;domain=' + document.domain
})