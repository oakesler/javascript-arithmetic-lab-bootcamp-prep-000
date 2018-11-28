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
  
  if(x * 0 === 0)
    return x
    
  if (x = "isNan")
  return 
  
  
  
}

describe('makeInt(n)', function() {
  it('parses n as an integer and returns the parsed integer', function() {
    expect(makeInt(a.toString())).toEqual(a)
  })

  it('assumes base 10', function() {
    expect(makeInt('0x2328')).toEqual(0)
  })

  it('returns NaN as appropriate', function() {
    expect(isNaN(makeInt('sldkjflksjf'))).toEqual(true)
  })
})
