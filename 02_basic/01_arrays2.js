const marvel = ['ironman', 'batman', 'superman']

const DC = ['batman', 'flash', 'superman']

// marvel.push(DC)

console.log(marvel);

// console.log(marvel.concat(DC));

const allHeros = [...marvel, ...DC]

// console.log(allHeros);


const another_arr = [1, 2, 3, [4, 5, 6], 7, [8, 9, [3, 4, 5]]]

// const [a, b, ...rest] = another_arr

// console.log(a, b, rest);


const allArray = another_arr.flat(Infinity)

console.log(allArray);




console.log(Array.isArray("Rishi"));
console.log(Array.from("Rishi")); 
console.log(Array.from({name: "Rishi", age: 22})); 


let score1 = 10
let score2 = 20
let score3 = 30

console.log(Array.of(score1, score2, score3));



