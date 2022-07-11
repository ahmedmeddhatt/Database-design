const { Client} = require ('pg')

const client = new Client({
    host:"localhost",
    port:5432 ,
    user: "postgres",
    password:"Ahmed medhat0",
    database:"store_database"
})

client.on("connect",()=>{
    console.log('Database Connected ..');
})

client.on("end",()=>{
    console.log('End Connection');
})

// client.connect()

// client.query(`select * from users where id=$1`,["42bc85ed-222e-418e-8756-edfd98d200b0"], (err,result)=>{
//     if(!err){
//         console.log(result.rows);
//     }
//     client.end()
// })

module.exports = client