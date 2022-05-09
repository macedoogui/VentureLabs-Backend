const express = require('express');
const cors = require('cors');
const port = 3333;
const app = express();
const route = require('./src/routes/Pessoas.route');
const connectToDatabase = require('./src/database/database');

app.use(express.json());

connectToDatabase();

app.use(cors());

app.use('/Pessoas', route);

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port} 🚀`);
});
