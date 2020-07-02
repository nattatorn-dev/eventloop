console.log("I'm First");

setImmediate(function () {
    console.log('Im setImmediate');
});

console.log("I'm Second");

process.nextTick(function () {
    console.log('Im nextTick');
});

console.log("I'm Last");

/*
Output
$ node server.js
I'm First
I'm Second
I'm Last
Im nextTick
Im setImmediate
*/