console.log('process');

process.on('exit', (code) => {
  // code inside here is synchronous. 
  // One last operation before existing
  console.log(`about to exit with code: ${code}`);
})

process.on('uncaughtException', (err) => {
  console.error(err)


  // if you don't manually exit the process, node will keep running unpredictably. 
  // an uncaught exception at this level should almost always kill the process
  process.exit(1)
})

process.stdin.resume()

console.freak()