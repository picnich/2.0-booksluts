import './modules/app.js'

function ready(fn) {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }
  
  function hi() { 
    console.log('From Main.js')
  }
  ready(hi)

