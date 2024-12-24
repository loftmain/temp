/**
 * map, filter, reduce, forEach
 * ES5부터 지원
 * 기존 배열의 값을 건드리지 않고 새로운 값을 만들어냄.
 */

/* Array.prototype.map 
인수로 전달받은 배열과 똑같은 길이의 새로운 배열을 반환함.
순회하는 각 아이템을 콜백으로 연산한 결과로 구성된 새로운 배열
*/
const arr1 = [1, 2, 3, 4, 5];
const doubleArr = arr1.map((item) => item * 2);
console.log(doubleArr);

