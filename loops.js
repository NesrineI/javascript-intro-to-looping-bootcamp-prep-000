
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
  }
  while(array.length >0 && maybeTrue())
}
var tab = ["fistVar", "secondVar"]
doWhileLoop(tab)
tab
