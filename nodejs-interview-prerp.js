const arr = [1,6,5,2,3,4,7,10,9]

const obj = {}


for(let i = 0; i < arr.length; i++){
    obj[arr[i]] = true;
}

for(let i = 1; i <= 10; i++){
    if(obj[i] == undefined){
        console.log(`Missing number is ${i}`);
    }
}
