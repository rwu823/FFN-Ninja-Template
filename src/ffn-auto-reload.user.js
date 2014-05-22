// ==UserScript==
// @id             ffn-auto-reload
// @name           ffn-auto-reload
// @version        2014.5.20
// @author         Rocky Wu <rwu.tw@ffn.com>
// @description    Automate reload browser after sandbox publish
// @website        https://github.com/rwu823/FFN-Ninja-Template
// @updateURL      https://raw.githubusercontent.com/rwu823/FFN-Ninja-Template/master/src/ffn-auto-reload.user.js
// @icon           https://raw.githubusercontent.com/rwu823/FFN-Ninja-Template/master/src/logo-32x32.png

// @include        *adultfriendfinder.com:*
// @include        *alt.com:*
// @include        *friendfinder.com:*
// @include        *asiafriendfinder.com:*
// @include        *seniorfriendfinder.com:*
// @include        *outpersonals.com:*
// @include        *amigos.com*
// @include        *frenchfriendfinder.com:*
// @include        *germanfriendfinder.com:*
// @include        *filipinofriendfinder.com:*
// @include        *indianfriendfinder.com:*
// @include        *penthouse.com:*

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

      noti,

      warn = function(){
        var input = [].slice.call(arguments),
            args = ['%c[Ninja-Template]', 'color:green;'].concat(input)

        if(noti) noti.close()

        noti = new Notification('[Ninja-Template]', {
          body: input.join(' '),
          icon: 'https://raw.githubusercontent.com/rwu823/FFN-Ninja-Template/master/src/logo-32x32.png'
        })

        console.warn.apply(console, args)
      }

  Socket.on('ninja-template', function(o){
    return ({
      'save-local': function(){
        warn('Save local:', o.file)
      },

      'error-save-local': function(){
        warn('Error', o.statusCode, 'save local, waiting for try again')
      },

      'publish': function(){
        warn('Publish to sandbox (' + o.site + '-' + o.lang + '):', o.file)
      },

      'error-publish': function(){
        warn('Error', o.statusCode, 'publish, waiting for try again')
      },

      'reload': function(){
        warn('Reloading browser...')

        setTimeout(function(){
          noti.close()
          location.reload()
        }, 100)
      }
    })[o.act]()
  })

  document.cookie = 'debug_cookie_perf_off=1;path=/;domain=' + document.domain
})