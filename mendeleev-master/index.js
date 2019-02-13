const getStr = require('mendeleev-stringify');
const fs = require('fs');

module.exports = (filePath) => {

    fs.readFile(filePath, {flag: 'r', encoding: 'UTF-8'},  (err, info)=>
    {
        for (let item of info.split('\r\n'))
        {
            console.log(getStr(item));
        }
    });
};