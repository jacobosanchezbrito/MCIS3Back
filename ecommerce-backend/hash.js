const bcrypt = require('bcrypt');

async function main() {
  const password = 'MerCaf7'; 
  const hashed = await bcrypt.hash(password, 10);
  console.log('Hashed password:', hashed);
}

main();
