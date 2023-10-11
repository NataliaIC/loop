// Exercitiul nr 2

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}

let i = 0;
do {
    console.log(i);
    i++;
} while (i <= 10);

// Exercitiul nr 3

for (let i = 0; i < 5; i++) {
    console.log(i + 1);
}

// Exercitiul nr 4

const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);\
}


const arr = [1, 2, 3, 4, 5];
for (const element of arr) {
    console.log(element);
}

// Exercitiul nr 5

const text = "string";
for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
}

const arr = "string";
for (const element of arr) {
    console.log(element);
}

// Exercitiul nr 6

// ==map==

const arr = [1, 2, 3]
const arr1 = arr.map ((item) => {
    return item       
    })

console.log (arr)


// ==filter==

const arr = [true, false, true]
const arr1 = arr.filter ((item) => {
    return item       
    })
arr1.push(1)
console.log ('arr', arr1)


// ==indexOf==

const arr = ['unu1', 'doi2', 'trei3', 'patru', "cinci5"]
const index = arr.indexOf ('doi2')

console.log (index)


// ==findIndex==

const arr = [1, 2, 3]
const index = arr.findIndex ((item) => {
    return item > 1
})

console.log (index)


// ==every==

const arr = [1, 2, 3]
const index = arr.every ((item) => {
      return item > 0
})

console.log ('arr', index)


// ==some==

const arr = [1, 2, 3]
const index = arr.some ((item) => {
      return item > 0
})

console.log ('arr', index)


// ==flat==

const arr = [1, 2, 3, [4, 5], 6,[ [8], 10], 15]

console.log ('flat', arr.flat(5))


// ==forEach==

const arr = [1, 2, 3]

let sum = 10
arr.forEach ((item) => {
      sum = sum + item
})

console.log(sum)


// ==find==

const arr = [1, 2, 3]
const index = arr.find ((item) => {
    return item > 2
})

console.log (index)


// ==contact==

const arr = [1, 2, 3]
const arr2 = [9, 2, 7]
const arr3 = [...arr, ...arr2]

console.log('arr', arr)
console.log('arr2', arr2)
console.log('arr3', arr3)


// ==includes==

const arr = [1, 2, 3]

console.log ('arr', arr)
console.log ('includes:', arr.includes(2))



