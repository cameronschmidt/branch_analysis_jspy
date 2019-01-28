var Person = function(first, last, middle) {
    this.first = first;
    this.middle = middle;
    this.last = last;
};

Person.prototype = {

    whoAreYou : function() {
        return this.first + (this.middle ? ' ' + this.middle: '') + ' ' + this.last;
    }

};

var a = NaN;

// TODO: please fix this code!
if (a === NaN) {  // Noncompliant; always false
  console.log("a is not a number");  // this is dead code
  console.log("this is a dead code branch");  // added a console log to my test branch
}

// TODO: By the way, fix this code too!!
if (a !== NaN) { // Noncompliant; always true
  console.log("a is not NaN"); // this statement is not necessarily true
}

for (var k = 0; k < 10; k++)
{
  // TODO: do something here
}

if (a === a) {
  console.log("This is very strange coding");
}

for (var i = 0; i < strings.length; i--) {
  console.log("dead code")
}

for (var l = 0; l < 10; l--) {
  // TODO: fix this dead code
  console.log("This is dead code")
}

if (str == null && str.length == 0) {
  console.log("String is empty");
}
