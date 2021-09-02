// 8/31 화요일 (9/2 추가 update)



// 자바스크립트 시작


//변수에 대한 개념
/*변수란 프로그램을 실행하는 동안 값이 여러번 달라질 수 있는 데이터를 가리킨다.
반면 값을 할번 지정하면 바뀌지 않는 데이터를 상수(constant)라고 한다.



// comic 박스를 생성한 상태
// 변수 선언 (변수를 만든 상태; 저장할 컴퓨터 메모리 공간에 문패를 붙이는 것과 같다.)


// var comic;

// comic 박스 안에 원피스 데이터를 할당한 상태
// 변수 초기화 : 등호를 사용해서 데이터를 할당한 상태

// comic = "원피스";

// console.log(comic);


// 변수를 선언한과 동시에 초기화를 진행함
//  위에 과정을 간소화 시킴

// var apple = "사과";

/*
var a;
var b;
var c;
*/

//변수 동시 선언
var a, b, c;



/*
var d = 10;
var e = 20;
var f = 30;

*/

// 변수 동시 초기화
// var d = 10, e = 20, f = 30;


// 모든 변수는 선언과 동시에 undefined가 자동으로 할당된다.

// var computer; 

// console.log(computer);


/*
var house;
house = "집";


console.log(house);

//새로운 데이터로 변경할수 있다.

house = "아파트"; 

console.log(house);
*/

//  아파트로 출력이 됨.




/*
var house; 
console.log(house);

//undefined -> 아래와 같이 하면 집으로 바뀜

house = "집"
console.log(house);
*/




// 변수 작성방법

// 캐멀 케이스

// var mathScoreStudent = 10;

// 스네이크 케이스

// var math_score_student = 10;


// 주의점
//  밑에 작성방식은 오류가 생긴다.
// var math-score-student = 100;

// var _math;
// var $math;

// 위의 특수문자 2개 빼고는 서두에 특수문자를 넣을수 없다.



// var apple10;
// var 10apple;

//  숫자가 먼저 나오면 오류가 생긴다.


// 변수를 자세하게 작성해야 한다.

// var w, var a x
// var car_Travel d



/*


//  데이터 타입 (데이터의 종류들) 책 p.468


// 문자열 (String)

var msg1 = "Hello World";
var msg2 = 'Welcome';


console.log(msg1);
console.log(msg2);

// var msg3 = "Nice to meet you'; 큰 따옴표, 작은 따옴표 혼용하면 안된다.



// 축약어 표현하기
// She is a girl
// She's a girl

var msg4 = "She's a girl ";
var msg5 = 'She\'s a girl';


console.log(msg4);
console.log(msg5);

//  결과 값은 동일 축약어로 나옴

*/



// 숫자 (Number)
var num1 = 10;
var num2 = -10;
var num3 = 3.14;
var num4 = -3.14;

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);


// 연산 작업 진행 가능 (정수와 실수 합도 가능)
console.log(num1 + num2);
console.log(num1 + num3);





// 연산자 (operator)




// 숫자 사칙연산

var a = 20;
var b = 10;

console.log(a + b);
console.log(a - b);

console.log(a * b);
console.log(a / b);
console.log(a % b);

// 나누기를 하여서 나머지 값만 알고 싶을때는 %로 처리

//  문자열이다. 큰 따옴표 안에 들어갔기 때문에 
// 글자를 이어 붙이게 되어서 2010이 나온다.



var str1 = "20";
var str2 = "10";



console.log(str1 + str2);
console.log(str1 - str2);
console.log(str1 * str2);
console.log(str1 / str2);
console.log(str1 % str2);


// 연결 연산자

var firstName = "Yeonsu";
var lastName = "Hong";

// 공백을 만들어준다.(공백을 문자로 인식한다.) HTML과의 차이점
console.log(firstName + "    " + lastName);


var str11 = "현재 시간은";
var time = 10;
var str12 = "시 입니다.";


console.log(str11 + time + str12);





// ++, -- 연산자
var num10 = 10;

// num10 = num10 - 1; -1씩 차감한다.
// console.log(num10);

//  뒤에서 부터 해석하는 것이 좋다.

//console.log(--num10); // 결과 값 9
//console.log(--num10); // 결과 값 8


console.log(++num10); 	// 11  +1씩 증가
console.log(++num10);	// 12




// console.log(num10--); //num10 값을 먼저출력하고 그 다음 마이너스 (후 차감)
console.log(--num10); // (선 차감)
console.log(num10);




/* 할당 연산자

// +=, -=, *=, /=, %= 연산자

var num20 = 20;

// num20 = num20 + 10;

// 자기 자신을 업데이트

num20 += 10; //위와 같은 뜻이다. ( y = y + x)

console.log(num20); // 결과 값 30


*/


//  비교 연산자 >, <, ==, ===, !=, !==, <=, >=
/*
var a = 10;
var b = 20;
var c = 30;

console.log( a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);


console.log(a == b);
console.log(a === b);

console.log(a != b); a와 b가 다른지..
console.log(a !== b);

// != 값이 다른지를 검사하는 것!
*/
/*

// 숫자
var num10 = 10;
var num20 = 20;

// 문자
var str10 = "10";
var str20 = "20";

console.log(num10 == str10); // 출력 결과물이 같으므로 true
console.log(num10 === str10); // 데이타 타입까지 같은지 따지는 것 등호 3개 (데이터 타입이 다르므로 false)

console.log(num20 != str20);  // 데이터 타입을 떠나서 내용물이 같기 때문에 false (같지 않아야 true)
console.log(num20 !== str20); // 두개의 데이터 타입이 달라서 true로 나타난다.
*/

//  논리 연산자 : AND(&&), OR (||)
/*
var num30 = 30;
var num40 = 40;
var num50 = 30;


console.log(num30 === num40 && num30 === num50); // 양쪽 모두 참인경우 참, 하나라도 거짓이면 false
console.log(num30 === num40 || num30 === num50); // 둘중에 하나가 참이면 참으로
*/


// 불리언(boolean) : true, false 논리연산자와 결합해서 사용. ex> 포탈아이디 비번 하나라도 틀리면 x니까 여기서 활용
/*
console.log(true);
console.log(false);
console.log(1 === 2 );
console.log(10 < 20);

console.log(10 === 10 || 20 === 30 );
*/




 // 9/1 수요일 (수정 : 9/2 목요일)


//  null, undefined 둘다 값이 없는 상태!!
//  null : 변수 초기화로 명시적으로 빈 값을 변수 안에 할당한 상태 ( 변수로 할당된 값이 유효하지 않다는것 )

var n = null;

// undefined 변수를 선언만 한 상태 (값은 할당 되지 않음!!)

var u;

console.log(n);
console.log(u);



// null과 undefined 차이점


console.log(typeof 10);
console.log(typeof "Hello World")
// number인지 string인지 나타난다.
// null은 원래 원시타입(Primary type)인데 null이 참조타입(Object type)로 출력되는 이유는???
// 태생적으로 가지고 있는 버그 때문에 그렇다. 버그는 수정할수 없다.

// console.log(typeof null);
// console.log(typeof undefined);



console.log(null == undefined);
console.log(null === undefined);

//  등호 세개일땐 데이터 값이 다르기 때문에 false로 출력된다. 위에껀 true



//  부정문 !


/*
console.log(!true); 
// 느낌표는 true의 반대를 의미 : false가 출력
console.log(!false); // true 가 나온다.
*/

console.log(!null); //true
console.log(!!null); //!true = false

// 느낌표 2개는 재부정이다. 두번부정 

console.log(!undefined); // true
console.log(!!undefined); // false


console.log(10 + null); // null -> 0 ( 0으로 바뀌게 된다. )
console.log(10 + undefined); // NaN (Not a Number); 일종의 오류이다. 숫자가 아니다. <회사에서 면접을 볼때 물어보는 내용>


원시 타입의 내용 끝!!


//  책 (p.481 ~ 511 조건문 내용은 skip된 상태 3. 제어문, 전역/지역 변수, 스코프, 호이스팅, 반복문 1편에서 나옴 )



//  책 (p. 512 ~)

// 참조 타입 中 하나인 함수 


// 함수 (function)

/*
console.log(10 + 10);
console.log(20 + 30);
console.log(5 + 10);
*/


//  임의의 숫자 2개를 전달 받아서 덧셈을 하는 기능을 만들고 싶다.

//  함수를 선언했다. 기능을 만들었는데 버튼을 인식 시킨 상태 x (스위치를 켜지 않았다.)

/*



function sum() {
	console.log("Hello")
	console.log(10 + 10);
}

//  함수를 키는 행위 = 함수 호출
sum();


// Hello와 20이 순차적으로 output
sum();
sum();
sum();
sum();
sum();

// 얼마든지 호출을 할수 있다.

*/









/*
//  Parameter (매개변수), Argument (인수)
// 매개변수 : num1, num2 

function sum(num1, num2 )   {

console.log(num1 + num2);

}

// 인수 : 호출시 전달되는 값
sum(10 , 20);
sum(100, 50);
*/
// 30과 150이 출력 된다.






//  매개 변수는 firstName과 lastName 이고 출력되는 Yeonsu와 Hong은 인수이다.


/*
function fullName(firstName, lastName) {

	console.log(firstName + "          " + lastName)

}

fullName("Yeonsu", "Hong");
*/
/*

function area(width, height) {
	


	var result = width * height;
	console.log(result);

}
area(10); 

// 원래 두개 넣어야 되는데 하나만 넣어서 NaN이 출력된다. 어떠한 연산작업은 끝났지만 숫자는 아니다 라는 의미

*/


function area(width, height) {

	console.log(width);
	console.log(height);


/*
area(10,20);

// 200을 출력한다.

// 만약 하나값을 출력한다면??

area(10);

// undefined가 출력된다.
*/


// 매개 변수와 인수가 쌍을 이루고 있어야 한다.













//  매개 변수안에 들어갈수 있는 것은 모든 type이 가능하다.

/*
function test(a) {
	console.log(a);
}

test(10);
test("Hello world");
test(true);
test(null);


test(function a() {});
test([10,20,30]);
test({name: "Yeonsu" }

*/









// return
/*
function sum(num1, num2) {
	// console.log(num1 + num2);
	return num1 + num2;
}

var result = sum(10,20); // 함수 호출 = 30, result = 30
console.log(result);
*/

// return이 사용될 때는 ??

function area(hor, ver) {
	return hor * ver;
}
//                가로 세로 높이
var volume = area(10, 20) * 100; //200

console.log(volume);

//부피값이 출력되어서 20,000이 나온다.

/*
area(10, 20); //200이라는 값을 가지고 있다. 출력은 x

console.log(area(10,20)); //200이 출력된다.

*/

// https://brunch.co.kr/@brunch92ny/9 참조













//  배열 (Array)

/*
var banana = "바나나";
var apple = "사과";
var melon = "멜론";
 */

var fruit = ["바나나", "사과", "멜론"];
console.log(fruit);



// 인덱스 (index)를 통해서 특정 data에 접근할 수 있다.
console.log(fruit[0]); // 바나나
console.log(fruit[2]); // 멜론


fruit[2] = "수박"; // 수박으로 변경
console.log(fruit);

// 출력되는 length는 data의 갯수를 의미한다.



// array에는 자바스크립트의 모든 데이터 타입을 넣을 수 있다.
var arr = [
	10,
	"Hello",
	true, null, undefined, function a() {}, [10, 20, 30], {name: "kim"}

];


// 주의점 2가지


// 숫자에다가 갑자기 문자열을 넣는다거나 하면 활용할때 어려울수 있다.

//  1. 배열안에 있는 데이터는 가능한한 동일한 데이터 타입이어야 한다.
//  2. 가능한 동일한 성격을 가지고 있는 데이터를 넣어주는게 좋다.

//예시 
var num = [10,20,30, "Hello World"]
// Hello world x
var fruit = ["사과", "배", "바나나", "양상추"]
// 양상추 x



// 배열 안에 있는 배열 데이터에 접근하는 방법
/*
var score = [[10, 20, 30], [100, 200, 300]];

// 직접 실습 해보기
console.log(score);
console.log(score[1]);
console.log(score[1][2]); // 두번째 300이라는 데이터만 가져오는 방법
*/


58:05

// 객체 (object)
// 하나의 변수안에 전부 때려 놓고자 할때 사용한다.
// 객체를 만들때는 중괄호를 사용한다.


// 이름, 나이, 스킬, 성별
// key - value = property

/*
var student = {
	name :"Yeri",
	age: 23,
	skills: ["보컬", "춤","연기"]
};

console.log(student);

// 객체 안 데이터에 접근하는 방법 (2가지) 둘다 기억해야 된다.
// 1. .사용
// 2. 대괄호 사용

console.log(student.name);
console.log(student['name']);


// 위에서 춤만 가져오는 방법
console.log(student.skills[1]);



student.age = 100;
console.log(student);


// 성별 넣기

student.gender = "female"

console.log(student);
*/
/*

var student = {
	name :"Yeri",
	age: 23,
	skills: ["보컬", "춤","연기"],


	test1: true,
	test2: null,
	test3: undefined,
	test4: {color: "red"}
// 객체안에 또 다른 객체를 넣을수 있다.

// 메서드 : 객체 안에서 만들어진 함수
//  객체 밖에서 만들어진거는 그냥 함수

	sum: function (num1, num2) {
		return num1 + num2;
	}





var result = student.sum(10,20);

console.log(result);


// 형태가 비슷하다, 자바스크립트 안에 이미 있는 형태이고 콘솔객체안에 있는 로그라는 메서드를 사용한 것이다.
student.sum(100, 200);
console.log("Hello World");
*/


// 원시 타입과 참조 타입의 차이점 ★★★★★★★★ (중요!)

// https://brunch.co.kr/@brunch92ny/10 (추가로 공부할 내용)

//원시 타입의 특성

/*
var str1 = "Hello World";
var str2 = str1;



console.log(str1);
console.log(str2);



// str1 = "Nice";
// 원본 데이터(str1)만 수정, 복사 데이터(str2)는 그대로임
// 원시타입의 특성

	str2 = "Nice";

// 이렇게 하면 원본 타입은 그대로임
*/




/*

// 참조 타입

var obj1 = {name: "Yeonsu"}
var obj2 = obj1;


// obj1.name = "choi";

// 결과는 obj2도 변경이 된다. 원시 타입과 다름

obj2.name = "Hong";

// 결과는 obj1도 변경이 된다.

console.log(obj1);
console.log(obj2);

// 참조 타입은 지정한 주소를 가르키는 것이라 보면 된다.
*/



// 자바스크립트로 버튼 기능 만들기


//yellow, green, pink #dc143c, rgba(123, 123, 123, .5);

var colors = ['yellow', 'green', 'pink', '#dc143c','rgba(123, 123, 123, 0.5)'];

// document는 HTML에 영향력을 발휘하는 객체다.
// document.write()문 : 웹 브라우저 화면에 출력을 담당한다.

var bg = document.getElementById('color-bg');
var btn = document.getElementById('btn');


//function()같이 함수명이 없는것을 익명함수라고 한다.
// 콜백 함수 : 호출 기호 없이 특정 조건 하에 호출되는 함수

// btn 자체도 객체이다
btn.addEventListener('click', function() {
	


	// 0 ~ 4
	var random = Math.floor(Math.random() * 5);
	// console.log(random);
	 // console.log(colors[random]);	


	bg.style.backgroundColor = colors[random];
})

//  1 ~ 6 숫자를 랜덤하게 가져오는 게임
// Math.random() : 0 ~ 0.999999~ (1은 절대로 될수 없다.)
// Math.random() * 6  : 0 ~ 5.99999~
// Math.floor(Math.random() * 6) : 0 ~ 5
// Math.floor(Math.random() * 6) + 1 : 1 ~ 6


// 0에서 1미만의 소수가 random하게 나온다.

console.log(Math.random());
console.log(Math.random() * 6);

// 내림 처리 하기
console.log(Math.floor(Math.random() * 6));
console.log(Math.floor(Math.random() * 6) + 1 );



// 예약어 (종류는 굉장히 많다.)
// var, typeof , function, null, undefined, false, true 


console.log("Main");

var mainVar = "Main Var";


function mainFunc() {
	console.log("Main Func");
}




