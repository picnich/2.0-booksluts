// import { Test } from './_includes/js/test'
// import { MyComponent } from './_includes/js/test'
// import { MyComponent } from '/_includes/js/test'
// import { MyComponent } from '/js/test'
// import { MyComponent } from 'js/test'

function ready(fn) {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  
ready(() => console.log('Loooaded'));
// ready(() => MyComponent);
