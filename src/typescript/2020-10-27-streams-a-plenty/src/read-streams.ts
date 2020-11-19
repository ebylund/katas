import { Readable } from 'stream'
import faker from 'faker'
import stringify from 'csv-stringify'

const simpleReadStream = async () => {
  const inStreamDumb = new Readable();
  inStreamDumb.push('ABCDEFGHIJKLM');
  inStreamDumb.push('NOPQRSTUVWXYZ');

  inStreamDumb.push(null); // No more data

  inStreamDumb.pipe(process.stdout);
  return
}

const fakeUsers = (count: number) => {

  let counter = 0
  const readStream = new Readable({
    objectMode: true,
    read(size) {
      if (counter >= count) {
        this.push(null)
        return
      }
      this.push({ email: faker.internet.email(), firstName: faker.name.firstName(), lastName: faker.name.lastName() })
      counter++
    }
  })

  return readStream
}

(async () => {
  await simpleReadStream()
  console.log('\n\n');

  fakeUsers(10)
    .pipe(stringify({header: true}))
    .pipe(process.stdout)
})()