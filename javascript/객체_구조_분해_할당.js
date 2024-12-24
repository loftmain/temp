/*
const object = {
    a: 1,
    b: 1,
    c: 1,
    d: 1,
    e: 1,
}

const { a, b, c, ...objectRest } = object;

console.log(a);
console.log(b);
console.log(c);
console.log(objectRest);
*/
/*
const object2 = {
    a: 1,
    b: 1,
}

const { a: first, b: second } = object2;
console.log(first);
console.log(second);
*/
const object3 = {
    a: 1,
    b: 1,
};

const { a = 10, b = 10, c = 10} = object3;
console.log(a);
console.log(b);
console.log(c);

function SampleComponent({ a, b }) {
    return a + b;
};

const com = SampleComponent({ a: 3, b: 5 });
console.log(com);