async function test() {
    return 'hello jspang';
}

console.log(test());

function getSomething() {
    return 'something';
}

async function testAsync() {
    return 'async something';
}

async function getTest() {
    const v1 = await getSomething();
    const v2 = await testAsync();
    console.log(v1, v2);
}

getTest();

function asyncFunc() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('promise_function')
        }, 3000);
    });
}

async function asyncTest() {
    console.log(await asyncFunc());
}

asyncTest();