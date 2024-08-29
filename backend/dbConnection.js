const sql = require('mssql/msnodesqlv8')

const dbConfig = {
    user: 'sa',
    password: 'Tnc@123',
    server: '',
    port: 1433,
    driver: "msnodesqlv8",
    database: '',
    options: {
        trustedConnection: true
    }
}

async function connectAndQuery() {
    try {
        await sql.connect(dbConfig);
        const result = await sql.query`SELECT * FROM YourTable`;
        console.dir(result);

    } catch (err) {
        console.error('Error trying to connect:', err);
    } finally {
        sql.close();
    }
}

connectAndQuery();