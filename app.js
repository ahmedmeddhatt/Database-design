const client = require ('./database')

const query = async () => {
        await client.connect();
        const result = await client.query(`insert into users (email, user_name, first_name, last_name, password) values ($1 ,$2 ,$3, $4, $5) returning *`,
         ['ahmeddd@gmail.com','Ahmed Medhat', 'Ahmed', 'Medhat','Nadanoda' ])
        console.log(result.rows);
        client.end()
    }
   
   
query()






