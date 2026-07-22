

/* alias = 별명/별칭 */


type User1 = {
    id: number;
    name: string;
    age: number;
    isPaid: boolean;
}
type User2 = User1 & {auth: string};

const user1: User1 = {
  id:1,
  name:'tiger',
  age:30,
  isPaid:true
} 

const user2: User1 & {auth:string} = {
  id:2,
  name:'tiger',
  age:30,
  isPaid:true,
  auth:'master'
} 

interface User3 {
    id:number;
    name: string;
    age:number;
    isPaid:boolean;
    auth:string;
}
interface User3 {address:string}


interface User4 extends User3 {
    address: string
}

const user3: User3 = {
  id:3,
  name:'tiger',
  age:30,
  isPaid:true,
  auth:'master'
} 


type Fn = (value:string) => void

interface _Fn { (value:string): void}

//function Fn (value:string):void{
//    console.log(value)
//}

/*
interface는 객체 전문 / 라이브러리에서 많이 사용
type은 모든 타입을 만드는 공식
*/
/* index signature */

const Person = {
    name: 'tiger',
    age:30,
    email:'tiger@gmail.com',
    gender:'male',
    phone:1234123,
}

const person:Person = {
    name: 'tiger',
    age:30,
    email:'tiger@gmail.com',
    gender:'male',
    phone:1234123,
    address: '서울시 강남구',
    auth:'master'
}