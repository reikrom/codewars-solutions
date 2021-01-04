function Person(myName, yourName) {
  this.name = myName;
  this.greet = function(yourName){ 
    return "Hello " + yourName + ", my name is " + myName;
  }
}