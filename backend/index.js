const cors = require('cors');
const express = require('express');

const app = express()
const port = 3000

app.use(cors());
app.use(express.json());


const PORT = port || 5000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});