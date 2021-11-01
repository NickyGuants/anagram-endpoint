const express = require('express');

const app = express();
app.use(express.json())

app.post('/', (req, res) => {
    const { string1, string2 } = req.body;
    res.status(201).send(checkAnagram(string1, string2))
})

//THis function converts the string received from the req.body to lowercase,
//we then convert the string into an array using the split() method
//we then sort the array and convert back to string using join() method
//we then use an if statement to check whether the two strings are equal,
//if they are equal, it means that they are anagrams and we return true,
//else we return false

function checkAnagram(string1, string2) {
    let newstr1 = string1.toLowerCase().split("").sort().join("");
    let newStr2 = string2.toLowerCase().split("").sort().join("");

    if (newstr1 === newStr2) {
        return true;
    }
    return false;

} 

app.listen(8001)