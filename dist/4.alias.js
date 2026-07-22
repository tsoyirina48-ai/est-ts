/* alias = 별명/별칭 */
const user1 = {
    id: 1,
    name: 'tiger',
    age: 30,
    isPaid: true
};
const user2 = {
    id: 2,
    name: 'tiger',
    age: 30,
    isPaid: true,
    auth: 'master'
};
const user3 = {
    id: 3,
    name: 'tiger',
    age: 30,
    isPaid: true,
    auth: 'master'
};
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
    age: 30,
    email: 'tiger@gmail.com',
    gender: 'male',
    phone: 1234123,
};
const person = {
    name: 'tiger',
    age: 30,
    email: 'tiger@gmail.com',
    gender: 'male',
    phone: 1234123,
    address: '서울시 강남구',
    auth: 'master'
};
export {};
