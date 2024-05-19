// task 1

function add() {
    console.log(arguments);
    const args = Array.from(arguments);
    return args.reduce((acc,cur)=>acc+cur);
    console.log(args);
}
console.log (add(1,2,3,4,5,6,7,8,9,10));

//even and odd numbers
 const numbers = [1,2,3,4,5,6,7,8,9,10];
 const even=numbers.filter((item)=>{
    return item%2===0
 })
 const odd=numbers.filter((item)=>{
    return item%2==!0
 })
 console.log(`even numbers`,even)
 console.log(`odd numbers`,odd)
  
 //Squares of even numbers
 let a=2
 let b=4
 let c=6
 let d=8
 let e=10
console.log(`Squared numbers:`,Math.pow(a,2))
console.log(`Squared numbers:`,Math.pow(b,2))
console.log(`Squared numbers:`,Math.pow(c,2))
console.log(`Squared numbers:`,Math.pow(d,2))
console.log(`Squared numbers:`,Math.pow(e,2))


//Tripled odd numbers
let f=1
let g=3
let h=5
let i=7
let j=9
console.log(`Tripled odd numbers:`,Math.pow(f,3))
console.log(`Tripled odd numbers:`,Math.pow(g,3))
console.log(`Tripled odd numbers:`,Math.pow(h,3))
console.log(`Tripled odd numbers:`,Math.pow(i,3))
console.log(`Tripled odd numbers:`,Math.pow(j,3))


//Task 2
 let formatArrayStrings = (strArray=[],
processedNums = []) => {
    processedNums =
processArray(processedNums);
    return strArray.map((str,i) => {
        return processedNums[i] % 2 === 0?
    str.toUpperCase() : str.toLowerCase();
    })
}
