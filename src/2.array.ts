



let arr:number[] = [1,2,3];

//arr = [10,100,'1000']

let str:string[] = 'a,b,c'.split(',');

// str = [1,2,3];

/*generic type*/
let _arr:Array<number> = [1,2,3];
let _str:Array<string> = ['a','b','c'];





let multi: (string | number | boolean)[] = ['hello', 10, true];

multi = [false,'bye','100']

/*
저리 정하면 안되나? 하나라도 빼먹으면 안되는거 아닌가?
 */

/*
튜플 타입 - tuple type
*/
let tuple:[number,number,number] = [1,2,3];

let tupleB:[string,number] = ['hello',30];

tupleB = ['bye', 100];

const user:[string,number][] = [
  ['심선범',30],
  ['신선범',30],
  ['신석범',30],
]