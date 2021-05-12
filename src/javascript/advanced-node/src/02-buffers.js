const string = 'touché'
const buffer = Buffer.from('touché')

console.log(string, string.length)
console.log(buffer, buffer.length)

console.log(Buffer.alloc(8));
console.log(Buffer.allocUnsafe(8));
console.log(Buffer.allocUnsafe(8).toString());
console.log(Buffer.allocUnsafe(8).fill());