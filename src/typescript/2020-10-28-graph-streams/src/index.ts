import { ApolloServer, gql } from 'apollo-server-express'
import express from 'express'
import generate from 'csv-generate'
import stringify from 'csv-stringify'
import pg, { Client, Pool } from 'pg'
import QueryStream from 'pg-query-stream'

const app = express()

const queries = gql`
  type Query {
    quotes: [Quote]
    quote(id: Int!): Quote
  }
 `

const quote = gql`
  type Quote {
    body: String,
    author: String
  }
`

const typeDefs = [queries, quote]

const quotes = [
  {
    id: 1,
    body: 'let there be light',
    author: 'God'
  },
  {
    id: 2,
    body: 'aint nobody done more walking',
    author: 'Forest Gump'
  }
]

const getQuoteById = (id: number) => {
  return quotes.find(it => it.id === id)
}

const resolvers = {
  Query: {
    quotes: (parent, args, context, info) => {
      // console.log('parent: ', parent);
      // console.log('args: ', args);
      // console.log('context: ', context);
      // console.log('info: ', info);
      return quotes
    },
    quote: (parent, args, context, info) => {
      return getQuoteById(args.id)
    }
  }
}

const graphServer = new ApolloServer({ typeDefs, resolvers})
graphServer.applyMiddleware( { app })

const port = 5252

app.get('/interactive-courses', async (req, res) => {

  const pool = new Pool({
    host: 'localhost',
    database: 'postgres',
    user: 'postgres',
    password: ''
  })

  const resp = await pool.query('select * from dvs_interactive_course')
  res.send(resp.rows)
  pool.end()
})

app.get('/interactive-courses-stream', async (req, res) => {

  const pool = new Pool({
    host: 'localhost',
    database: 'postgres',
    user: 'postgres',
    password: ''
  })

  const resp = await pool.query('select * from dvs_interactive_course')
  res.send(resp.rows)
  pool.end()
})

app.get('/gen-series-stream', (req, res) => {
  res.send('series stream!')
})

app.get('/gen-series', async (req, res) => {
  const client = new Client({
    connectionString: 'postgres://postgres@localhost/postgres:5432'
  })

  const pool = new Pool({
    host: 'localhost',
    database: 'postgres',
    user: 'postgres',
    password: ''
  })

  const qString = `SELECT * FROM generate_series(0, $1) num`

  // const query = new QueryStream(qString, [1000])
  const resp = await pool.query(qString, [1000])
  res.send(resp.rows)
  pool.end()
  // console.log('resp: ', resp);

  // const stream = client.connect((err, client, done) => {

  // })
  //release the client when the stream is finished
  // stream.on('end', done)
  // stream.pipe(stringify()).pipe(res)


  // const stream = await pool.query(query)
  // stream.pipe()

  // console.log('stream: ', stream);
  // stream.pipe(res)
})

app.get('/users', (req, res) => {
  res.write('si bueno')
  res.attachment('users.csv')
  generate({
    columns: 10,
    length: 5000000
  }).pipe(res)
})

app.get('/', (req, res) => {
  // console.log('res: ', res)
  res.send(`
    <a href="http://localhost:${port}/graphql">GraphiQL</a> <br>
    <a href="http://localhost:${port}/users">Download Users Report</a>
  `)
})

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
})

