// If two or more resistors are connected in parallel, the overall resistance of the circuit reduces. 
// It is possible to calculate the total resistance of a parallel circuit by using this formula:

// 1/RTotal = 1/R1 + 1/R2 + 1/R3 ...

// Create a function that takes an array of parallel resistance values, and calculates the total resistance of the circuit.

// Worked Example
// parallelResistance([6, 3, 6]) ➞ 1.5
// 1/RTotal = 1/6 + 1/3 + 1/6
// 1/RTotal = 2/3
// RTotal = 3/2 = 1.5

function parallelResistance(arr) {
	
}



console.log(parallelResistance([6, 3]), 2)
console.log(parallelResistance([6, 3, 6]), 1.5)
console.log(parallelResistance([10, 10]), 5)
console.log(parallelResistance([10, 20, 10]), 4)
console.log(parallelResistance([60, 30, 20]), 10)
console.log(parallelResistance([16, 4]), 3.2)
console.log(parallelResistance([20, 5]), 4)
console.log(parallelResistance([500, 500, 500]), 166.7)
console.log(parallelResistance([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 0.3)