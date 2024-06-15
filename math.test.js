// sum.test.js
import { expect, test, it } from 'vitest'
import { add, sum } from './math'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

it("should return the correct sum if an array is provided",
  ()=>{
    // Arrange
    const number = [1, 2, 3] 
const expectedResult = number.reduce((acc, cur)=> acc + cur)
    // Action
    const result = add(number);
    // Assertion
    expect(result).toBe(expectedResult)
  }
)

it("should return provide NaN if at list one invalid number is provided",
  ()=>{
    // Arrange
    const number = [1, "invalid", 3] 
    const expectedResult = number.reduce((acc, cur)=> acc + cur)
    
    // Action
    const result = add(number);
    
    
    // Assertion
    expect(result).toBeNaN();
  }
)

it("should return provide current sun if an array of numeric string is provided",
  ()=>{
    // Arrange
    const number = ['1', "2", '3'] 
    const expectedResult = number.reduce((acc, cur)=> +acc + +cur)
    
    // Action
    const result = add(number);
    
    
    expect(result).toBe(expectedResult);
  }
)

it("should give an error when any argument did not pass",
  ()=>{
   const resultFn = () =>{
    add()
   }

   expect(resultFn).toThrow()
  }
)

it("should give an error if multiple argument is provided",
  ()=>{
   const resultFn = () =>{
    add(1,2,3,4)
   }

   expect(resultFn).toThrow(/is not iterable/i)
  }
)
