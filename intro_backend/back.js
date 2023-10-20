const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');
const app = express();
const port = 3000; // Puerto en el que se ejecutará el servidor

// Middleware para analizar datos del formulario
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/formulario.html');
});

app.get('/list',(req, res) => {
const nombreArchivoCSV = 'datos.txt'; // Reemplaza con el nombre de tu archivo CSV
let resultados = [];
fs.createReadStream(nombreArchivoCSV)
    .pipe(csv())
    .on('data', (row) => {
      // Procesa cada fila del archivo CSV
      resultados.push(row);
    })
    .on('end', () => {
      // El archivo CSV se ha leído por completo
      res.json(resultados); // Envía los datos del CSV como respuesta
    });
});

app.post('/procesar', (req, res) => {
  const nombre = req.body.nombre;
  const apellidos = req.body.apellidos;
  const email = req.body.email;

  if(/\d/.test(nombre)){
    res.send(`${nombre}! Los nombres humanos no tienen numeros`);
  }

if(/\d/.test(apellidos)){
    res.send(`${apellidos}! Los nombres humanos no tienen numeros`);
  }
  // Puedes hacer lo que quieras con los datos aquí, como almacenarlos en una base de datos o enviar una respuesta al usuario.
  res.send(`¡Gracias, ${nombre} ${apellidos}! Tu dirección de correo electrónico es: ${email}`);
const datos = `${nombre} ${apellidos},${email}\n`;

const nombreArchivo = 'datos.txt';

// Escribe los datos en el archivo
fs.appendFile(nombreArchivo, datos, (err) => {
  if (err) {
    console.error('Hubo un error al guardar los datos en el archivo.');
  } else {
    console.log('Los datos se han guardado correctamente en el archivo.');
  }
});
  //res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});


