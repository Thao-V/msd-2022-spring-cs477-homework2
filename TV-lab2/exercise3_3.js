const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    const img = fs.createReadStream("./big_ben.jpg")
    img.pipe(res);
});

server.listen(9000, () => console.log('Listening to 9000...'));