const arr1 = ['a', 'b'];
const arr2 = arr1;

console.log(arr1 === arr2);

const arr3 = ['a', 'b'];
const arr4 = [...arr3];

console.log(arr3 === arr4);

const obj1 = {
    a: 1,
    b: 2,
};
const obj2 = {
    c: 3,
    d: 4,
};

const newObj1 = { ...obj1, ...obj2 };
console.log(newObj1);

// 전개 구문은 순서의 차이가 있다.