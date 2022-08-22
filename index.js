function receivesAFunction(callback){
  return callback()
};


// The returnsANamedFunction function should:
// take no arguments
// return a named function
function returnsANamedFunction() {
  const add = (a, b) => a + b;
  return add;
}
// The AnAnonymousFuncreturnstion function should:
// take no arguments
// return an anonymous function
function returnsAnAnonymousFunction() {
  return () => "I";
}