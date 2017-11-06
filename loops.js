
function whileLoop(n) {
  while(n>0){
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
var tab = ["fistVar", "secondVar"]
doWhileLoop(10)
