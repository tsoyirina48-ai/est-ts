let obj:any;

obj = 1;
obj = 'a';
obj = {x:10};
obj = [1,2,3];
obj = () => {}

obj.toUpperCase(); // string method;
obj.toFixed(); // number method


let arr:unknown;


/* unknown type */
let arr:unknown;

arr = 1;
arr = 'hello';

/* 타입 좁히기 (narrowing) */

if(typeof arr === 'number'){
    arr.toFixed();
}