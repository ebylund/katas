import generate from 'csv-generate'
import fs from 'fs'

generate({
  columns: ['ascii', 'ascii', 'int', 'bool', 'ascii', 'int'],
  length: 10_000
}).pipe(fs.createWriteStream('large.csv'))