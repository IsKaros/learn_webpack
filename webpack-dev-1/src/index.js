// import './index.css'
import $ from 'jquery'
import dog from '../dog.jpeg'
console.log(window.$,window.jQuery);
// console.log($)
// let test = require('./test')
// require('./index.css')
import './index.css'
let img = new Image()
img.src = dog
img.width = 200
document.body.appendChild(img)
// console.log('webpack-learning')

// let fn = () => {
//   console.log('es6-syntax')
// }
// fn()

// // @isTestable(true)
// class MyClass { }

// function isTestable(value) {
//    return function decorator(target) {
//       target.isTestable = value;
//       console.log(target);
//    }
// }
// function * gen(params) {
//   yield 1
// }
// console.log(gen().next());
// console.log(MyClass.isTestable);