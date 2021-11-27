const fs = require('fs');

const extractData = () => {

    const file = fs.readFileSync('files/data.json');
    const data = JSON.parse(file);

    for (let i = 0; i < data.length; i++) {
        fs.writeFileSync(`files2/${i}.json`, JSON.stringify(data[i]));
    }
}

extractData()
