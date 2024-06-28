import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    odometer: '',
    horse_power: '',
    manufactured_date: '',
    vehicle_type: '',
    transmission_type: '',
    fuel_type: '',
    brand: '',
    Season: ''
  });
  
  const [predictedPrice, setPredictedPrice] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://api-flask-exgb.onrender.com/predict', formData)
      .then(response => {
        setPredictedPrice(response.data.predicted_price);
      })
      .catch(error => {
        console.error('There was an error making the request!', error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Car Price Predictor</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Odometer:</label>
          <input type="number" name="odometer" value={formData.odometer} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Horse Power:</label>
          <input type="number" name="horse_power" value={formData.horse_power} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Manufactured Date:</label>
          <input type="number" name="manufactured_date" value={formData.manufactured_date} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Vehicle Type:</label>
          <select name="vehicle_type" value={formData.vehicle_type} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="compact_car">Compact Car</option>
            <option value="convertible">Convertible</option>
            <option value="other">Other</option>
            <option value="sedan">Sedan</option>
            <option value="station_wagon">Station Wagon</option>
            <option value="suv">SUV</option>
            <option value="van">Van</option>
          </select>
        </div>
        <div className="form-group">
          <label>Transmission Type:</label>
          <select name="transmission_type" value={formData.transmission_type} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
          </select>
        </div>
        <div className="form-group">
          <label>Fuel Type:</label>
          <select name="fuel_type" value={formData.fuel_type} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="CNG">CNG</option>
            <option value="LPG">LPG</option>
            <option value="diesel">Diesel</option>
            <option value="gasoline">Gasoline</option>
            <option value="hybrid">Hybrid</option>
          </select>
        </div>
        <div className="form-group">
          <label>Brand:</label>
          <select name="brand" value={formData.brand} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="alfa_romeo">Alfa Romeo</option>
            <option value="audi">Audi</option>
            <option value="bmw">BMW</option>
            <option value="chevrolet">Chevrolet</option>
            <option value="chrysler">Chrysler</option>
            <option value="citroen">Citroen</option>
            <option value="dacia">Dacia</option>
            <option value="daewoo">Daewoo</option>
            <option value="daihatsu">Daihatsu</option>
            <option value="fiat">Fiat</option>
            <option value="ford">Ford</option>
            <option value="honda">Honda</option>
            <option value="hyundai">Hyundai</option>
            <option value="jaguar">Jaguar</option>
            <option value="jeep">Jeep</option>
            <option value="kia">Kia</option>
            <option value="lancia">Lancia</option>
            <option value="land_rover">Land Rover</option>
            <option value="mazda">Mazda</option>
            <option value="mercedes_benz">Mercedes Benz</option>
            <option value="mini">Mini</option>
            <option value="mitsubishi">Mitsubishi</option>
            <option value="nissan">Nissan</option>
            <option value="opel">Opel</option>
            <option value="peugeot">Peugeot</option>
            <option value="porsche">Porsche</option>
            <option value="renault">Renault</option>
            <option value="rover">Rover</option>
            <option value="saab">Saab</option>
            <option value="seat">Seat</option>
            <option value="skoda">Skoda</option>
            <option value="smart">Smart</option>
            <option value="sonstige_autos">Sonstige Autos</option>
            <option value="subaru">Subaru</option>
            <option value="suzuki">Suzuki</option>
            <option value="toyota">Toyota</option>
            <option value="volkswagen">Volkswagen</option>
            <option value="volvo">Volvo</option>
          </select>
        </div>
        <div className="form-group">
          <label>Season:</label>
          <select name="Season" value={formData.Season} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Spring">Spring</option>
            <option value="Winter">Winter</option>
          </select>
        </div>
        <button type="submit">Predict Price</button>
      </form>
      {predictedPrice !== null && (
        <div>
          <h2>Predicted Price: RWF {predictedPrice}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
