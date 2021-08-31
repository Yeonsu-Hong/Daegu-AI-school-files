// comic 박스를 생성한 상태
// 변수 선언 (변수를 만든 상태)


// var comic;

// comic 박스 안에 원피스 데이터를 할당한 상태
// 변수 초기화 : 등호를 사용해서 데이터를 할당한 상태
// comic = "원피스";

// console.log(comic);


// 변수를 선언한과 동시에 초기화를 진행함
// var apple = "사과";

/*
var a;
var b;
var c;
*/

//변수 동시 선언
var a, b, c;


// 변수 동시 초기화
/*
var d = 10;
var e = 20;
var f = 30;

*/

// var d = 10, e = 20, f = 30;


// 모든 변수는 선언과 동시에 undefined가 자동으로 할당된다.

// var computer; 

// console.log(computer);


/*
var house;
house = "집";


console.log(house);

house = "아파트"; 

console.log(house);
*/


/*
var house; 
console.log(house);

//undefined -> 집으로 바뀜

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


/*


//  데이터 타입 (데이터의 종류들)
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

//  결과 값은 동일

*/


/*
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





// 연산자 
// 숫자 사칙연산

var a = 20;
var b = 10;

console.log(a + b);
console.log(a - b);

console.log(a * b);
console.log(a / b);
console.log(a % b);

// 나누기를 하여서 나머지값만 알고 싶을때는 %로 처리

//  문자열이다. 큰 따옴표 안에 들어갔기 때문에 
// 글자를 이어 붙이게 되어서 2012을 나온다.
var str1 = "20";
var str2 = "10";

console.log(str1 + str2);
console.log(str1 - str2);
console.log(str1 * str2);
console.log(str1 / str2);
console.log(str1 % str2);


var firstName = "Yeonsu";
var lastName = "Hong";

// 공백을 만들어준다. HTML과의 차이점
console.log(firstName + "    " + lastName);


var str11 = "현재 시간은";
var time = 10;
var str12 = "시 입니다.";


console.log(str11 + time + str12);

*/






// ++, -- 연산자
var num10 = 10;

// num10 = num10 - 1;
// console.log(num10);

//  뒤에서 부터 해석하는 것이 좋다.

//console.log(--num10); // 결과 값 9
//console.log(--num10); // 결과 값 8


console.log(++num10); 	// 11  +1씩 증가
console.log(++num10);	// 12




// console.log(num10--); //num10을 먼저출력하고 그다음 마이너스
console.log(--num10); // 선차감의 의미
console.log(num10);

/*

// +=, -=, *=, /=, %= 연산자

var num20 = 20;

// num20 = num20 + 10;

// 자기 자신을 업데이트

num20 += 10; //위와 같은 뜻이다.

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

console.log(a != b);
console.log(a !== b);

// != 값이 다른지를 검사하는 것!
*/
/*
var num10 = 10;
var num20 = 20;


var str10 = "10";
var str20 = "20";

console.log(num10 == str10); //
console.log(num10 === str10); // 데이타 타입까지 같은지 따지는 것 등호 3개

console.log(num20 != str20);
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

console.log(true);
console.log(false);
console.log(1 === 2 );
console.log(10 < 20);

console.log(10 === 10 || 20 === 30 );











