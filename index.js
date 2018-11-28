var a, b 

function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}

function inc(a) {
  a++
  return a
} 

function dec(a) {
  a--
  return a
}

function makeInt(a) {
  var x = parseInt(a)
  
  if (x * 0 === 0)
    return parseInt(a)
    else return "is Nan"
  
}
