

process.nextTick(function () {
    console.log('Im nextTick 1');
});

process.nextTick(function () {
    console.log('Im nextTick 2');
});

console.log("I'm First");

setImmediate(function () {
    console.log('Im setImmediate');
});

setTimeout(() => {
    console.log('Im timeout')
}, 0);


console.log("I'm Second");

console.log("I'm Last");

process.nextTick(function () {
    console.log('Im nextTick 3');
});


/*
Output
I'm First
I'm Second
I'm Last
Im nextTick 1
Im nextTick 2
Im nextTick 3
Im timeout
Im setImmediate
*/