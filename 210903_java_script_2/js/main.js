// 9/3 금요일


// console.log("Hello World")



// IF 조건문
/*
var a = 20;
var b = 40;
var c = 60;
*/
// if문 안에 들어가 있는 조건이 참이어야만 중괄호 안에 들어가 있는 것이 실행된다. 소괄호는 true, false만 인식한다.
// if(a < b) {
	// console.log("a는 b보다 작다.")
// }


// if else 문 : false인 경우에만 실행되는 구문


/*
if(a > b) {
	console.log("a는 b보다 크다.");
} else {
	console.log("a는 b보다 작다.")
}
*/
//  결과 : a는 b보다 작다 라고 뜬다. (in console창!)



// else if 문 : 여러개의 조건들을 설정하고자 할때 사용.
// 소괄호에다가 내용을 추가하면 된다. (제한이 없음.)


/*
if( a > b ) {
	console.log("a는 b보다 크다.");
} else if(b > c) {
	console.log("b는 c보다 크다.");
} else if (a < c) {
	console.log("a는 c보다 작다.");
} else if(b < c) {
	console.log("b는 c보다 작다.");
} else {
	console.log( 전체가 false "모든 조건을 만족하지 않는다.")
}
*/
//  결과는 a는 c보다 작다만 출력된다. 이유는 가장 먼저 나오는 true 만 실행한다. 뒤에꺼는 보지도 않는다.
//  그래서 b는 c보다 작다가 출력되지 않는다.







// 중첩 if문 : 22번째 줄처럼 생기는 버그를 막기위해 중첩 if문을 사용한다. (탄탄한 논리구조를 위해 사용!!)
//  같은 경우도 넣는 것!

// a는 b와 같지 않을때
/*
if (a !== b) {

	if( a > b) {
		console.log("a는 b보다 크다.");
	} else {
		console.log("a는 b보다 작다.");
	}


} else {
	console.log ( "a와 b는 같다.");
}
*/

// 위에 10번째 줄 a,b,c값을 바꾸면 맞게 출력이 된다.





// 거짓이 되는 상황 (기억!!)

// false, 외에 다른 값을 입력해도 거짓이 출력될수 있다. 빈문자열 (""), 안에 글자가 들어가면 참, 숫자 (0), 0보다 크거나 작은 경우에는 참으로 인식 즉, -값도 참
// null, undefined도 거짓으로 인식, 아래 예시처럼 var test처럼 아무런 값이 없으면 undefined라서 거짓으로 인식 만약 글자를 넣으면 
// 참으로 인식

/*
var test;


if(test) {
	console.log("참!!!");
} else {
	console.log("거짓!!!");

}
*/
// 어디에 사용될수 있냐?? 로그인 ID 기입, 아무런 아이다가 안들어가있을때 false가 되어야 한다.






// 삼항 연산자는 무엇인가?

/*
var age = 15;


if(age >=18) {
	console.log("성인");
} else {
	console.log("어린이");
}

*/
// 변수를 생성 

// 삼항 연산자의 예시 - 가독성이 좋아서 사용하기가 좋다.
/*
var result = (age >= 18) ? "성인" : "어린이"
// 만약 참이라고 하면 ?에 있는 성인이 실행되고, :은 거짓 
console.log(result);

// 어린이가 출력된다.
*/



// 조건문들을 이용한 응용!!

// 로그인 기능 만들기 ( 책 자바스크립트 처음 페이지에 나온다.)


// 아래 결과 팝업창이 나타난다. (브라우저에서 기본적으로 제공하는 팝업!)
// prompt 자바스크립트에서 만들어 놓은 method 이고 브라우저 환경에서만 동작!!
// 책 p.451

var userId = prompt("아이디를 입력해 주세요.");
var userPw = prompt("비밀번호를 입력해 주세요");

 console.log(userId);
 console.log(typeof userPw);







// alert 메서드 p.450


// 아래 userPw를 12345로 큰따옴표 없이 하면 문자열과 숫자열이 되어버려 false가 된다.
// 해결책 :  parseInt 문자로 전달된 숫자를 숫자 데이터 타입으로 바꾸는역할
// parseInt : 숫자데이터 타입 정수형으로 바꿔준다.




if(userId === "inkwon" && parseInt(userPw) === 12345) {
	alert("로그인이되었습니다.");
} else {
	alert("아이디 또는 비밀번호가 틀렸습니다.")
}



// prompt로 전달받은 데이터 타입은 전부 string 이다.






//자바스크립트 초중급 사이에 있는 개념

// p. 517

//  전역 변수, 지역 변수

// 전역 변수 : 모든 범위에 영향력을 행사할수 있는 변수 (모든 국가에 적용되는 법) ; 함수 안쪽 바깥쪽 모두 영향력을 행사함
// 지역 변수 : 특정국가에만 적용되는 법 : 함수안에서 만들어지고 함수 안에서만 영향력을 행사한다.


/*
var globalV = "전역변수";

function func() {
	var localV = "지역변수";

	console.log(globalV);
	console.log(localV);
}

// func();

console.log(globalV);
console.log(localV);
*/

// 전역 변수는 출력이 되는데
// 지역 변수같은 경우엔 error가 발생 : localV is not defined
// 함수를 기준으로 전역과 지역이 구분 된다.






// 최신 자바스크립트에서는 let, const를 통해서 변수를 만들수 있다.
// let,const를 가지고 변수를 만들면 지역 전역변수 기준점이 달라진다.

// 일단은 let,const 부분은 skip한다. p.523에 내용이 나오긴 하나, var로 습득을 하고 향후 학습하도록 한다.



//  변수를 만들때 주의할 점!

/*
var gv = "전역변수";

function func() {
	var gv ="지역변수";
	console.log(gv);
}

func();

console.log(gv);
*/
// 지역 변수랑 전역 변수가 출력된다.


// 위에서 함수안에 있는 var를 생략하면 지역변수로만 나온다.
//  var 키워드를 사용하지 않아서 전역변수를 지역 변수로 바꿔준 것이다.
// var a = 10;
//  a = 100; 하면 바뀌는것과 같은 원리





// 전역 변수와 지역 변수를 분리하기 위해서 {} 중괄호만 써야 하는거 아닌가라고 생각할수 있다. 
// 전역과 지역을 구분짓는것은 중괄호가 아니다. 함수를 기준으로 지역과 전역이 구분된다.
/*
var gv ="전역 변수";

if(true) {
	var lv = "지역 변수??";

	// console.log(gv);
	// console.log(lv);
}

console.log(gv);
console.log(lv);

*/


// 전역 변수를 간편하게 확인하는 법!

/*
var gv = "전역변수";
var aaa = "aaa";


// window 객체 : 창에서 확인가능하다.  

*/
/*
function a() {
	console.log("a");
}
*/
// 브라우저 console 탭 안에서도 기입이 가능하다.

// window라고 하는 객체가 있다.
// console창에서 검색하면 많은 객체들이 나온다. p.578
//  전역변수는 window라는 객체의 property로 들어가있다.


// Property와 method의 차이??
 쉽게 말해 property는 객체의 특징이나 속성을 나타내고, method는 객체에서 할수 있는 동작을 표현한다.
자동차 운전이 하나의 프로그램이라면 '자동차'는 객체가 되고, 자동차의 property는 자동차 제조사나 모델명, 색상, 배기량등이 된다.
method는 시동걸기, 움직이기, 멈추기, 주차하기 등이 된다. 






// Scope의 개념
// 우리말로 번역하면 "범위"라는 뜻을 가지고 있다.
// 즉, scope란 '변수에 접근할 수 있는 범위'라고 할수 있는데,
//  Js 에서는 scope가 2가지 타입이 있다. global(전역)과 local(지역)이다.
// 


// Global scope (전역 스코프) : 
/*
var gv = "전역 변수"


function func() {
	console.log(gv);
}


func();

console.log(gv);
*?



//  위에 둘다 전역 변수가 나타난다.
//  





// local scope (지역 스코프) : function 안에서만 영향력을 발휘하는 것!

/*
function func( ) {

	var lv = "지역변수";
	console.log(lv);
}

func();

console.log(lv);
// 위에껀 출력을 못시키고 있다.



//  함수는 서로의 scope에 접근 할 수 없다.

function a() {
	var apple = "사과";
}
// 함수가 만들어질때 영향력은 a()까지다.



function b() {
	a(); // var apple = "사과"; 출력된다??? 출력안됨
	console.log(apple);
}

b();

*/





// 스코프 체인 (scope chain)


/*
var a = 10;

function func1 () {

	var b = 20;

	function func2 ( ) {
		var c = 30;


		console.log( a + b + c);
	}



	func2();

	console.log(c);     // 바깥쪽에서 안쪽으로 따져서 정의 되지 않았다라고 출력됨.
}


func1(); 
*/


//  결과는 60이 출력된다. a b c 각각을 다 출력했다. 안쪽에서 바깥쪽으로 따진다. 전역 변수까지 따진다.
//  바깥쪽에서 안쪽으로는 안된다.








// 렉시컬 스코핑

/*
var name = "Inkweon"


function fun1() {
	console.log(name);
}

function func2() {
	name = "Jun";
	func1();  // console.log(name)   (x)
 }

func2();

*/

//  결과는 Jun이 나온다.

// var name = "Jun";을 하면 inkweon이 나온다.





//  호이스팅 : 끌어 올린다는 개념 (**** 어렵다 책 보고 다시 이해! p.519 )

// 1. 변수 호이스팅

var a;

console.log(a); 


// 결과 : undefined

/*
 console.log(a); 

 var a;

 a = "나는 A다.";

 console.log(a);
*/
//  이렇게 해도 결과는 undefined, 나는 A다가 출력

//변수가 어떤 위치에서도 다 접근이 가능하다.

// 끌어 올리는 기능은 초기화에서 일어나지 않는다.






// 2. 함수 호이스팅
/*
func1();

function func1 () {
	console.log("Func1 함수다.");
}
*/
// 함수 func1()을 위쪽으로 끌어 올려져도 결과는 동일하다. 문제가 전혀 없다. 
// func1();



// 주의점이 있다.



// 함수를 만들기전에 호출을 하면,

// var func2 = undefined;가 들어가있다. 


/*
fun2();

var func2 = function ( ) {
	console.log("Func2 함수다");
}

// func2();
*/

// undefined를 호출하려고 해서 not a function이라고 뜬다.













// 자바스크립트에서 사용되는 객체 종류들 (책 16장)

// Math 객체 p.571

// console.log(Math);


// 웹 브라우저의 console창에서 검색을 하면, 여러가지 수리적 함수들이 나온다.


//  + https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math 에서 여러가지 기능들을 확인 가능!



// 실무에서 가장 많이 사용하는 Math 함수들




// abs : 절대값 반환
var num1 = Math.abs(-3);

console.log(num1);

//  결과값 : 3



// ceil : 올림 처리
var num2 = Math.ceil(0.3);
console.log(num2);

// 1이 출력된다.


// flooe : 내림 처리
var num3 = Math.floor(10.9);
console.log(num3);
// 10이 출력된다. 수학에서 버림 역활


// 랜덤한 숫자를 뽑아낼때, 0 ~ 0.999
var num4 = Math.random();
console.log(num4);


// parseInt(), parseFloat()

var str1 = "20.6";
var str2 = "3.14";

// 문자열로 작성된 숫자 자체를 데이터 타입으로 바꾸고 싶다.


// parseInt는 정수형으로 parseFloat는 실수형으로 바꾸어줄때 사용  (string -> number로)




var num1 = parseInt(str1);
var num2 = parseFloat(str2);


console.log(num1);
console.log(num2);


// 소숫점이 있다면 이하는 버림으로 처리함 그래서 20이 출력
// 3.14로 출력





