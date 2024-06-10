console.log(String);
console.dir(String);


const st = new String("san kyi tar par byar");


console.dir(st);

// console.log(st[1]);
// console.log(st[2]);
// console.log(st[13]);
// console.log(st.toLowerCase());
// console.log(st.toUpperCase());


console.log(st.substring(16,20));
console.log(st.substring(16,st.length));

console.log(st.search("kyi"));
console.log(st.search("hi"));

console.log(st.replace("kyi","pya"));
console.log(st.replaceAll("a","0"));


console.log(st.trim());


//type == data type
const z = "Kyaw kyaw";
console.log(z.length);
console.log(z.toLowerCase());



// const num = "135";
// const padnum = num.padStart(8,"0");





const num = "135";
const padNum = num.padEnd(8,"0");
console.log(padNum);



console.log(st.split());
console.log(st.split(""));
console.log(st.split("a"));