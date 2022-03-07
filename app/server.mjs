import http from 'http';

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log(new Date().toISOString(), req.method, req.url);
    res.end('<h1>Olá mundo!</h1>');
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
