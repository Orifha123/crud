import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { cars } from './car.data.js';
// import {cars} from 'car.data.js'


const app = express();
app.use(bodyParser.json());
app.use(cors());



// let cars = [
//   { color: "o", make: "Ford", model: "Fiesta", reg_number: "CL 77790" }
// ];

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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
