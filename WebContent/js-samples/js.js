console.log("Hello");
// console.assert(false);
Function.prototype.construct = function (aArgs) {
    var fConstructor = this;
    var fNewConstr = function () { 
    	fConstructor.apply(this, aArgs); 
    };
    fNewConstr.prototype = fConstructor.prototype;
    return new fNewConstr();
};

function MyConstructor () {
    for (var nProp = 0; nProp < arguments.length; nProp++) {
        this["property" + nProp] = arguments[nProp];
    }
}

var myArray = [4, "Hello world!", false];
var myInstance = MyConstructor.construct(myArray);

console.assert(myInstance.property1 == "Hello world!"); 
console.assert(myInstance instanceof MyConstructor);
console.assert(myInstance.constructor == MyConstructor);
