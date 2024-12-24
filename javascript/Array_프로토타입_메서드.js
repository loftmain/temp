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

/* Array.prototype.filter
순회하는 각 아이템의 연산 결과가 truthy 조건을 만족하는 경우에만 해당 원소를 반환하는 메서드임.
*/
const arr = [1, 2, 3, 4, 5];
const evenArr = arr.filter((item) => item % 2 === 0);
console.log(evenArr);

/* Array.prototype.reduce
초깃값에 따라 배열이나 객체 또는 그 외에 다른 무언가를 반환할 수 있는 메서드?
reducer 콜백 함수를 실행, 이를 초깃값에 누적해 결과를 반환 ?
- result는 앞서 선언한 초깃값의 현재를 의미
- item은 현재 배열의 아이템을 의미
콜백의 반환값을 계속해 초깃값에 누적하면서 새로운 값을 만든다??
 */
const sum = arr.reduce((result, item) => {
    return result + item;
}, 0);
console.log(sum);

// 짝수만 100을 곱해 반환하는 함수 예제 [filter, map을 reduce로 구현]
const result1 = arr.filter((item) => item % 2 === 0).map((item) => item * 100); // <= 배열 두번 순환
const result2 = arr.reduce((result, item) => {
    if (item % 2 === 0) {
        result.push(item * 100);
    }
    return result;
}, []);
console.log(result1);
console.log(result2);