 // Create an array of numbers
 let numbers = [1, 2, 3, 4, 5];

 // Iterate over each element and print it
 numbers.forEach(number => console.log(number));
 
 // Check if all elements are greater than 0
 const allPositive = numbers.every(number => number > 0);
 console.log(allPositive);
 
 // Check if any element is even
 const hasEven = numbers.some(number => number % 2 === 0);
 console.log( hasEven);
 
 // Find the first element that is even
 const firstEven = numbers.find(number => number % 2 === 0);
 console.log(firstEven);
 
 // Find the index of the first element that is even
 const evenIndex = numbers.findIndex(number => number % 2 === 0);
 console.log( evenIndex);
 
 // **Transformation functions:**
 
 // Map each element to its square
 const squares = numbers.map(number => number * number);
 console.log( squares);
 
 // Filter out elements less than 3
 const filtered = numbers.filter(number => number >= 3);
 console.log( filtered);
 
 // Reduce the array to the sum of its elements
 const sum = numbers.reduce((acc, num) => acc + num, 0);
 console.log( sum);
 
 // **Other functions:**
 
 // Reverse the order of elements
 numbers.reverse();
 console.log( numbers);
 
 // Join the elements into a string
 const joined = numbers.join(",");
 console.log(joined);
 
 // Sort the elements in ascending order
 numbers.sort((a, b) => a - b);
 console.log( numbers);
 
 // Slice a portion of the array
 const slice = numbers.slice(1, 3);
 console.log(slice);
 
 // Push a new element to the end
 numbers.push(6);
 console.log(numbers);
 
 // Pop the last element from the end
 const popped = numbers.pop();
 console.log( popped);
 
 // Shift the first element from the beginning
 const shifted = numbers.shift();
 console.log( shifted);
 
 // Unshift a new element to the beginning
 numbers.unshift(0);
 console.log("Unshift:", numbers);
 