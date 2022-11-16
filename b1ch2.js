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



//const 4ds = 4;

const trueObjext = {
    true: true,
}

if (trueObjext.true) {
    console.log(trueObjext.true);
    console.log(typeof(trueObjext.true));
} else {

}



var a = 2;

foo();


function foo() {
	a = 3;

	console.log( a );

	var a;

}




function boo(a) {
    
    console.log( a );	
    return 2;
}

var x = boo(3);

console.log( x );
// boo();


function makeAdder(x) {
	// параметр `x` - внутренняя переменная
	
	// внутренняя функция `add()` использует `x`, поэтому
	// у нее есть "замыкание" на нее
	function add(y) {
		return y + x;
	};
	
	return add;
}

var plusOne = makeAdder( 1 );
// `plusTen` получает ссылку на внутреннюю функцию `add(..)`
// с замыканием на параметре `x`
// внешней `makeAdder(..)`
var plusTen = makeAdder( 10 );

// console.log( plusOne( 3 ))		// 4  <-- 1 + 3
// console.log( plusOne( 41 ))		// 42 <-- 1 + 41
// console.log( plusTen( 13 ))		// 23 <-- 10 + 13

console.log('------------------------------');

function User(){
	var username, password;

	function doLogin(user,pw) {
		username = user;
		password = pw;

		// сделать остальную часть работы по логину
	}

	var publicAPI = {
		login: doLogin
	};

	return publicAPI;
}

// создать экземпляр модуля `User`
var fred = User();

fred.login( "fred", "12Battery34!" );