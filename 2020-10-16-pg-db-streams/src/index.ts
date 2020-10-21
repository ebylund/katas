import { Pool, Connection, Client } from 'pg'
import { sql, createPool } from 'slonik'


import fs from 'fs'
import stringify from 'csv-stringify'
import QueryStream from 'pg-query-stream';
// // import JSONStream from 'JSONStream';
const ws = fs.createWriteStream(`the-datr.csv`);
const spool = createPool('postgres://postgres:pass@localhost:5432')
// const pool = new Pool({
//   host: '127.0.0.1',
//   database: 'postgres',
//   user: 'postgres'
// });

// const client = new Client({
//   host: 'loclhost',
//   port: 5432,
//   database: 'postgres',
//   user: 'postgres',
//   password: '',
// })

const main = async () => {
  
  console.log('hola');
  const query = new QueryStream(`SELECT * FROM generate_series(0, $1) num`, [10000])
  // client.connect((err, ) => {})
  // pool.query(query)

  // stream.on('end', () => {
  //   pool.end()

  // })

  // stream.pipe(process.stdout)


  // stringify(edges, addHeaders ? { header: true } : {})
  // .pipe(ws, { end: false })
  // console.log(stream);
  // stream.on('end', (...args) => {
  //   console.log('args: ', args);
  //   return 1
  // })
  // stream.pipe(process.stdout)
  // const { rows } = await pool.query(`SELECT * from members`)
  // console.log('rows: ', rows);

  const range = [100]
  const { rows } = await spool.query(sql`SELECT * FROM generate_series(0,50) num`)
  console.log('rows: ', rows);

  const a = await spool.stream(sql`SELECT * FROM generate_series(0,100) num`, (stream) => {
    stream.on('data', ( { row }) => {
      console.log(row.num);
    })
    // stream.pipe(ws)
  })
}

(async () => {
  await main()
  // pool.end()
})()
