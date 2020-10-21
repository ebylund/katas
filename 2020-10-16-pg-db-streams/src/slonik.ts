import { Pool, Connection, Client } from 'pg'
import { sql, createPool } from 'slonik'

import fs from 'fs'
import stringify from 'csv-stringify'
const ws = fs.createWriteStream(`the-datr.csv`);
const spool = createPool('postgres://postgres:pass@localhost:5432')

const main = async () => {
  // const range = [100]
  // const { rows } = await spool.query(sql`SELECT * FROM generate_series(0,50) num`)
  // console.log('rows: ', rows);

  await spool.stream(sql`SELECT * FROM generate_series(0,100) num`, (stream) => {
    stream.read()
    console.log(stream);
    // console.log(stream);
    stream.on('data', ( { row }) => {
      console.log('row: ', row);
    })

    stream.on('close', () => {
      spool.end()
    })
    // stream.on('end', () => {
    //   spool.end()
    // })
    // stream.pipe(ws)
  })
}

(async () => {
  await main()
  spool.end()
})()
