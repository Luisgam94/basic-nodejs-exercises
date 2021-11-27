let connection;
const oracledb = require('oracledb');
oracledb.initOracleClient({libDir: 'ruta de libreria'});

// reemplazar los valores por ruta de libreria, username, password y cadena de conexion.
(async function() {
    try{
        connection = await oracledb.getConnection({
            user : 'username',
            password : 'password',
            connectString : 'cadena'
        });
        console.log("Successfully connected to Oracle!")
    } catch(err) {
        console.log("Error: ", err);
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch(err) {
                console.log("Error when closing the database connection: ", err);
            }
        }
    }
})()
