/* void type */
//const sayHi:SayHi = (message) => {
// return message;
//  console.log(message)
//}
// 함수 선언문
function sayHi(message) {
    // return message;
    console.log(message);
}
/* never type  */
// 존재하지 않는 / 불가능한 타입 / 어떤 값도 정의할 수 없는 타입 
// 절대 발생하지 않는 값 / 절대 도달될 수 없는 코드
function showError(message) {
    throw new Error(message);
}
showError('에러입니다.');
function loop() {
    while (true) {
    }
}
/* iterator protocol */
/* lazy loop =  */
function* gen() {
    let count = 0;
    while (true) {
        yield ++count;
    }
}
export {};
