
/* 찐 상수 */
//const BLACK = '#000'

/* 진짜 진짜 찐 상수 */
/* enumerable type */

enum Direction {
    UP = 1,
    DOWN,
    LEFT,
    RIGHT
}

const direction = {
    up: Direction.UP
}

enum END_POINT {
    USER = 'https://jsonplaceholder.typicode.com/users',
  PHOTO = 'https://jsonplaceholder.typicode.com/photos'
}

fetch(END_POINT.USER,{
  headers:{
    
  }
})
