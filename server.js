const http = require('http');
const fs = require('fs')

// Usa '0.0.0.0' para escuchar en todas las interfaces de red disponibles
const host = '127.0.0.1'; // O puedes usar 'localhost' si solo quieres escuchar en tu máquina local
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' }); // Corrige 'text/plane' por 'text/plain'
    fs.readFile('index.html',(error, data)=>{
        if(error){
            res.writeHead(404)
            res.write("archivo no esnconrado")
        }else{
            res.write(data)
        }
        res.end()
    })
});

// Escucha en el puerto y dirección correcta
server.listen(port, host, () => {
    console.log("Servidor en línea en", host, port);
});
