function ready(fn) {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }
  
  function hi() { 
    console.log('asdfasdf')
  }
  ready(hi)