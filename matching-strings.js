// find matching numbers in given string

const firstString = '10.2.3.5';
const secondString = '2.3.8.4';

const firstArray = firstString.split('.');
const secondArray = secondString.split('.');

const arraySet = new Set();
firstArray.forEach(element => arraySet.add(element));

secondArray.forEach(element => {
    if(arraySet.has(element))
        console.log(element)
})
