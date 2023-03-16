const blacklistedEmailList = [
    "stefan.apostolovski@gmail.com",
    "stefan@gmail.com",
    "stefan97@hotmail.com",
    "stefan97@proton.com",
    "stefan97@yahoo.com",
];

const blacklistedEmailSet = new Set();

blacklistedEmailList.forEach(element => {
    blacklistedEmailSet.add(element);
});

const emailsToValidate = [
    "stefan.apostolovski@gmail.com",
    "stefan97@yahoo.com",
    "stefan97@yahoo.commk",
    "stefan97@yahoo.comm",
];

emailsToValidate.forEach(element => {
    if(blacklistedEmailSet.has(element))
        console.log(`${element} is blacklisted`);
    else
        console.log(`${element} is not blacklisted`);
})