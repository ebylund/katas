import stringify from 'csv-stringify'
import faker from 'faker'
import fs from 'fs'
import { DateTime } from 'luxon'
import { Pool } from 'pg'
import { createPool, sql } from 'slonik'
import { Transform } from 'stream'

const pool = new Pool({
  host: '127.0.0.1',
  database: 'postgres',
  user: 'postgres',
  password: ''
});

const insertUsers = async (count = 1) => {
  const users = createUsers(count)
  await pool.query(`INSERT INTO users VALUES ${users.join(',')}`)
}

const createUsers = (count: number) => {
  const users = []
  for (let i = 0; i < count; i++) {
    const rando = faker.random.boolean()
    users.push(`(DEFAULT,'${faker.internet.email(rando ? 'joseph' : 'donald', rando ? 'biden' : 'trump')}',DEFAULT)`)
  }

  return users
}

const spool = createPool('postgres://postgres:pass@localhost:5432')

const addIso = () => {
  return new Transform({
    transform: (data, _, done) => {
      done(
        null,
        { ...data.row, created_on_iso: DateTime.fromMillis(data.row.created_on).toISO() }
      )
    },
    objectMode: true
  })
}

const genSeries = () => sql`SELECT * FROM generate_series(0,100) num`

const main = async () => {
  await spool.stream(sql`SELECT * FROM users`, (stream) => {
    stream
      .pipe(addIso())
      .pipe(stringify({ header: true }))
      .pipe(fs.createWriteStream('election-results.csv'))

    stream.on('close', () => {
      spool.end()
    })
  })
}

(async () => {
  // await insertUsers(10_000)
  await main()
  spool.end()
  pool.end()
})()
