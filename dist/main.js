export let a = 10;


//a = 'hello'
function greeting(name, age = 30) {
    // if(typeof name === 'string'){
    //    throw new TypeError('너 타입 잘못했다?')
    //}
    return `${name} , ${age} '어서오세요!`
}
greeting('tiger');
