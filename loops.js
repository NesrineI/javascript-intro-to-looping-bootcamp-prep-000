function forLoop(array) {
  for(let i=0; i<array.length; i++){
    array[array.length+i] = `"I am ${i} strange loop${i === 0 ? '' : 's'}."`
  }
}
function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}
function whileLoop(n) {
  console.log(n--)
}
function doWhileLoop(array) {
  do{
    array.length--
  }while(array.length >0 && maybeTrue())
}
