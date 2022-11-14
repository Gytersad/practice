var a = null;
// console.log(typeof a);

var obj = {
    a: 'hello',
    b: 3,
}

var c = "b"

// console.log(obj.a, obj[c]);

function foo(){
    return 34;
}

foo.what = 23;

console.log(typeof foo.what);