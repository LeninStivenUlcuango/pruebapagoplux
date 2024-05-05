// import pg from "pg";

// const { Client } = pg;


// export const ClientBD= new Client({
//       host: process.env.DB_HOST,
//       port: parseInt(process.env.DB_PORT!),
//       database: process.env.DB_DATABASE,
//       user: process.env.DB_USERNAME,
//       password: process.env.DB_PASSWORD,
//     });

// export const connectDB=async ()=>{
//   try {
//     await ClientBD.connect();
//     console.info('Se conecto a la base correctamente.');
//   } catch (error) {
//     console.error('No se ha podido conectar a la base.');
//   }
// }

// export const users=async ()=>{
//   try {
//     await client.connect();
//     const users= await client.query('SELECT * FROM users');
//     console.log(users)
//     return  users.fields; 
// } catch (error) {
//     console.error(error)
// }
// }
