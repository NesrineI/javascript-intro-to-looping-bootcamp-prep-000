function forLoop(array) {
  for(let i=0; i<array.length; i++){
    array[array.length+i] = `"I am ${i} strange loop${i === 0 ? '' : 's'}."`
  }
  return array
}

function whileLoop(n) {
  while(n>=0){
    console.log(n--)
  }
  return ("done")
}
function doWhileLoop(array) {
  do{
    array.length-=1
  }
  while(array.length >0 && maybeTrue())
}
