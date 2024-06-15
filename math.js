export function add(numbers){
    let sum = 0;

    // throw new Error("something went wrong")

    for (const number of numbers) {
        sum += +number
    }

    return sum;
}

// sum.js
export function sum(a, b) {
    return a + b
  }


export const returnStringLength = str => str.length()