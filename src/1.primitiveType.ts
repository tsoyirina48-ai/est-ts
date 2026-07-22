/* number, string, boolean, null, undefined, never, any, unknown */

/* 숫자 타입 - number type */
let num1:number = 10; 
let num2:number = 1.123123;
let num3:number = -123123;
let num4:number = NaN;
let num5:number = Infinity;
let num6:number = -Infinity;

// num3 = '10';

/* 문자 타입 - string type */
let str1 = "hi"
let str2 = 'hi'
let str3 = `${num1} hello`

// str3 = false


/* 불린 타입 - boolean type */

let bool1:boolean = true;
let bool2:boolean = false;

/* 널 타입 - null type */

let nullA = null;

/* 언디파인드 타입 - undefined type */

let undef = undefined;

/* 리터럴 타입 - literal type */

let numA:10 = 10;
let strA:"hello" = 'hello';

numA = 10;
strA = 'hello';

/* 언노운 타입 - unknown type */

let unknown:unknown;

/* 네버 타입 - never type */

let never:never;

/* 애니 타입 - any type */

let any:any;