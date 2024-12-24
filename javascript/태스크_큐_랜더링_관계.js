// 동기 코드
console.log('a');

// 테스크 큐
setTimeout(() => {
    console.log('b');
}, 0);

// 마이크로 태스크 큐
Promise.resolve().then(() => {
    console.log('c');
});

// 리페인트 전 콜백함수 호출
window.requestAnimationFrame(() => {
    console.log('d');
});