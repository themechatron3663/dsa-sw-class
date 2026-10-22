// Big O

//for O(1) constant

let numbers = [10, 20, 30, 40, 50];

console.log(numbers[0]);

// for O(n) Linear

let numbers = [10, 20, 30, 40, 50, 66, 99, 88];

for(let i = 0; i < 5; i++){
    console.log(numbers[i]);
}

// for Quadratic O(n^2)

let numbers = [1, 2, 3];

for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++)
    {
        console.log(numbers[i], numbers[j]);
    }
}