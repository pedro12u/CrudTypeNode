import express from "express";
import usersRoutes from './routes/userRoutes';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/users', usersRoutes);

app.get("/", (req, res) => {
  res.send("API funcionando");
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
