const obj = {
    a :"aaa",
    b:"bbb",
    c:"ccc"
}


console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.is(obj));
console.log(Object.is("hein"));


console.log(Object.hasOwn(obj,"a"));
console.log(Object.hasOwn(obj,"z"));

