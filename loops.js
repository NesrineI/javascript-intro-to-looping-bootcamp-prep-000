
function whileLoop(n) {
  while(n>0){
    console.log(n--)
  }
  return ("done")
}

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

function doWhileLoop(array) {
  do{
    array.length-=1
    console.log(array)    
  }
  while(array.length >0 && maybeTrue())
}
var tab = ["fistVar", "secondVar"]
console.log(tab)
doWhileLoop(tab)
