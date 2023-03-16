// Calculate the angle between 2 analog clock arrows
const time = '12:30';
const degreesOfOneMinute = 90 / 15;     // 15 minutes difference between two arrows equals to 90 degrees

let hourArrow = Number(time.split(':')[0]);
const minutesArrow = Number(time.split(':')[1]);

// if the hour is at 12 o'clock, then it has position 0
if(hourArrow === 12)
    hourArrow = 0;

// denominate hour arrow value to minutes, so they can be compared against eachother
hourArrow = hourArrow * 5;

const result = degreesOfOneMinute * Math.abs(hourArrow - minutesArrow);
console.log(`The degrees between both arrows are ${result} degrees`);