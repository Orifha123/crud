import express from 'express';
import cors from 'cors';
import { cars } from './car.data.js'

const app = express();
// app.use(bodyParser.json()); // Replace with express.json() for cleaner code
app.use(express.json());
app.use(cors());

// Create
app.post('/cars', (req, res) => {
  const car = req.body;
  cars.push(car);
  res.status(201).send(car);
});

// Read
app.get('/cars', (req, res) => {
  res.send(cars);
});

// Update
app.put('/cars/:reg_number', (req, res) => {
  const { reg_number } = req.params;
  const updatedCar = req.body;
  cars = cars.map(car => car.reg_number === reg_number ? updatedCar : car);
  res.send(updatedCar);
});

// Delete
app.delete('/cars/:reg_number', (req, res) => {
  const { reg_number } = req.params;
  cars = cars.filter(car => car.reg_number !== reg_number);
  res.status(204).send();
});

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});