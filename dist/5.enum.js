/* 찐 상수 */
//const BLACK = '#000'
/* 진짜 진짜 찐 상수 */
/* enumerable type */
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 1] = "UP";
    Direction[Direction["DOWN"] = 2] = "DOWN";
    Direction[Direction["LEFT"] = 3] = "LEFT";
    Direction[Direction["RIGHT"] = 4] = "RIGHT";
})(Direction || (Direction = {}));
const direction = {
    up: Direction.UP
};
var END_POINT;
(function (END_POINT) {
    END_POINT["USER"] = "https://jsonplaceholder.typicode.com/users";
    END_POINT["PHOTO"] = "https://jsonplaceholder.typicode.com/photos";
})(END_POINT || (END_POINT = {}));
fetch(END_POINT.USER, {
    headers: {}
});
export {};
