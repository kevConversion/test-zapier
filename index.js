const express = require('express');
const app = express();
const port = process.env.PORT|| 3000;

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.get('/pipedrive', (req, res)=>{
    res.send('Hello Zapier')
})

app.listen(port, () => {
  console.log(`La aplicación está escuchando en http://localhost:${port}`);
});
