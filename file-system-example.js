const fs = require('fs');

// exportar archivo json por cada objeto del arreglo
const exportFile = () => {
    const data = [
        {
            name: 'Luis',
            lastName: 'Gamarra',
            age: '27'
        },
        {
            name: 'Oscar',
            lastName: 'Gamarra',
            age: '29'
        }
    ]

    for(let i = 0; i < data.length; i++) {
        fs.writeFileSync(`files/${i}.json`, JSON.stringify(data[i]));
    }
}

exportFile();

