import 'bootstrap'
// console.log('continue learing webpack');
// console.lo('a error');
// class log {
//   constructor(){
//     console.log('constructor');
//     console.lo('error');
//   }
// }
if(DEV === true){
  console.log('development')
}else {
  console.log('production');
}
let xhr = new XMLHttpRequest()
xhr.open('get','/api/webpack',true)
xhr.onload = function name(e) {
  console.log(xhr.response);
}
xhr.send()
