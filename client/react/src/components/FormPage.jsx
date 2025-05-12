
import React, { useState } from 'react';
import NavBar from './NavBar';
import './FormPage.css';

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    telephone: '',
    email: '',
    address: '',
    weight: '',
    bloodGroup: '',
    age: '',
    diseases: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5002/api/form/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Success:', data);
      alert('Form submitted successfully');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
    <NavBar className='navbar-form' />
    <div>
      <div className='main-div-form'>
  <h1>Do you want to donate blood? Fill in the information</h1>
  <form onSubmit={handleSubmit}>
    <label htmlFor="name">Name</label>
    <input type="text" id="name" name="name" placeholder="Enter your name" required value={formData.name} onChange={handleChange} />

    <label htmlFor="telephone">Telephone</label>
    <input type="tel" id="telephone" name="telephone" placeholder="Enter your telephone number" required value={formData.telephone} onChange={handleChange} />

    <label htmlFor="email">Email</label>
    <input type="email" id="email" name="email" placeholder="Enter your email" required value={formData.email} onChange={handleChange} />

    <label htmlFor="address">Address</label>
    <input type="text" id="address" name="address" placeholder="Enter your address" required value={formData.address} onChange={handleChange} />

    <label htmlFor="weight">Weight</label>
    <input type="number" id="weight" name="weight" placeholder="Enter your weight" required value={formData.weight} onChange={handleChange} />

    <label htmlFor="bloodGroup">Blood Group</label>
    <select id="bloodGroup" name="bloodGroup" required value={formData.bloodGroup} onChange={handleChange}>
      <option value="">Select blood group</option>
      <option value="A+">A+</option>
      <option value="A-">A-</option>
      <option value="B+">B+</option>
      <option value="B-">B-</option>
      <option value="AB+">AB+</option>
      <option value="AB-">AB-</option>
      <option value="O+">O+</option>
      <option value="O-">O-</option>
    </select>

    <label htmlFor="age">Age</label>
    <input type="number" id="age" name="age" placeholder="Enter your age" required value={formData.age} onChange={handleChange} />

    <label htmlFor="diseases">Do you have any diseases?</label>
    <input type="text" id="diseases" name="diseases" placeholder="Enter any diseases" value={formData.diseases} onChange={handleChange} />

    <button type="submit">Submit</button>
  </form>
</div>
    </div>
    </>
  );
};

export default FormPage;