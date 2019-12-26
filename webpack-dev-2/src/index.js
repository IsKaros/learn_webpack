// console.log('continue learing webpack');
// console.lo('a error');
// class log {
//   constructor(){
//     console.log('constructor');
//     console.lo('error');
//   }
// }
let xhr = new XMLHttpRequest()
xhr.open('get','/api/webpack',true)
xhr.send()
xhr.onload = function name(e) {
  console.log(xhr.response);
}
