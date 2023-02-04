let fs = require('fs');

fs.readFile('./name.txt', 'utf-8', (arr, data) => {
    if (arr) {
        console.log(arr);
    }
    console.log(data);
})