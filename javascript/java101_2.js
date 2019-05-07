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


function tipAmount(billAmount, service){
  if(service == 'good'){
    console.log(billAmount * .2)
  } else if(service == 'fair'){
    console.log(billAmount * .15)
  } else if(service == 'bad'){
    console.log(billAmount * .10)
  }
}

tipAmount(100 , 'good')
tipAmount(40 , 'fair')
tipAmount(100 , 'bad')


function tipAmount(billAmount, service){
  if(service == 'good'){
    console.log(billAmount * .2 + billAmount)
  } else if(service == 'fair'){
    console.log(billAmount * .15 + billAmount)
  } else if(service == 'bad'){
    console.log(billAmount * .10 + billAmount)
  }
}

tipAmount(100 , 'good')
tipAmount(40 , 'fair')
tipAmount(100 , 'bad')


function tipAmount(billAmount, service, split){
  if(service == 'good'){
    console.log((billAmount + billAmount * .2)/split)
  } else if(service == 'fair'){
    console.log((billAmount * .15 + billAmount)/split )
  } else if(service == 'bad'){
    console.log((billAmount * .10 + billAmount)/split)
  }
}

tipAmount(100 , 'good', 5)
tipAmount(40 , 'fair', 2)
tipAmount(100 , 'bad', 2)