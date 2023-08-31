function* test() {

    const value1 = yield 1;
    console.log(value1)//two

    const value2 = yield 2;
    console.log(value2)//three

    const value3 = yield 3;
    console.log(value3)//four

}
const iter = test();

console.log(iter.next("one"));
console.log(iter.next("two"));
console.log(iter.next("three"));
console.log(iter.next("four"));
