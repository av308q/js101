<!DOCTYPE html>
<!--
Created using JS Bin
http://jsbin.com

Copyright (c) 2019 by anonymous (http://jsbin.com/luhaqacemu/3/edit)

Released under the MIT license: http://jsbin.mit-license.org
-->
<meta name="robots" content="noindex">
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>

<script id="jsbin-javascript">
function hello(name)
{
  console.log(`Hello ${name}`);
}
  
hello('mustache');

console.log(`hello world`)

function madlibs(name, subject){
  console.log(`${name} fravorite subject is ${subject}` );
}

madlibs('Angel', 'history');



function tipAmount(amount,service){
   //Tip Calculator 1
   //return service == 'good' ? amount *.2 : service == 'fair' ? amount *.15 : service == 'fair' ? amount *.1 : 'SET PROPER SERVICE'   

   //Tip Calculator 2
   return service == 'good' ? amount *1.2 : service == 'fair' ? amount *1.15 : service == 'fair' ? amount *1.1 : 'SET PROPER SERVICE'; 
}

console.log(tipAmount(100,'good'));
console.log(tipAmount(40,'fair'));





</script>
</body>
</html>