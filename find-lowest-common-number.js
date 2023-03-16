// find lowest common number

const a1 = [1,2,3,4,5,6,7,8];

const a2 = [2,4,6,8]

const a3 = [3,4,5,7,9]


const numbers = {}

a1.forEach(element => {
    if(numbers[element] === undefined)
        numbers[element] = []
    numbers[element].push(element);
    })

a2.forEach(element => {
    if(numbers[element] === undefined)
        numbers[element] = []
    numbers[element].push(element);
})


a3.forEach(element => {
    if(numbers[element] === undefined)
        numbers[element] = []
    numbers[element].push(element);
})

let numberIsFound = false;
Object.keys(numbers).forEach(key => {
    if(numbers[key].length == 3 && !numberIsFound) {
        console.log(`lowest number is: ${key}`)
        numberIsFound = true
    }
})























