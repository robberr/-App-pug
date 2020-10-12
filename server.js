const app = require('./app');
async function main() {
    await app.listen(2000);
    console.log('Server is running port 2000')
}
main();
