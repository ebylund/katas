import { pipeline, Transform } from 'stream'
import { createReadStream, createWriteStream } from 'fs'
import { createGzip } from 'zlib'

const xformer = () => {
  return new Transform({
    transform: (data, _, done) => {
      console.log("data: ", data.toString() )
      done(null, data)
    }
  })
}

pipeline(
  createReadStream('./data/test.csv'),
  xformer(),
  // createGzip(),
  createWriteStream('./output/out.csv'),
  (err) => {
    if (err) {
      console.error('Pipeline failed', err);
    } else {
      console.log('Pipeline succeeded');
    }
  }
)