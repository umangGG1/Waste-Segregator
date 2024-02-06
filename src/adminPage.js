import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const AdminPage = () => {
  const [userId, setUserId] = useState('');
  const [wasteType, setWasteType] = useState('');
  const [bhawan, setBhawan] = useState('');

  const handleButtonClick = async (type) => {
    try {
      const response = await axios.post('http://localhost:80/store-data', {
        userId,
        wasteType,
        bhawan,
        wasteType: type,
      });
      console.log('Data stored:', response.data);
    } catch (error) {
      console.error('Error storing data:', error.response?.data || error.message);
    }
  };

  return (
    <div>
      <h1>ECO - IIT ROORKEE WASTE MANAGEMENT</h1>
      <label>
        User ID:
        <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
      </label>
      <br />
      <label>
        Waste Type:
        <input type="text" value={wasteType} onChange={(e) => setWasteType(e.target.value)} />
      </label>
      <br />
      <label>
        Select Bhawan:
        <select value={bhawan} onChange={(e) => setBhawan(e.target.value)}>
          <option value="rajendra">Rajendra Bhawan</option>
          <option value="ganga">Ganga Bhawan</option>
          <option value="jawahar">Jawahar Bhawan</option>
          <option value="KB">KB</option>
          <option value="govind">Govind Bhawan</option>
          <option value="rajiv">Rajiv Bhawan</option>
        </select>
      </label>
      <br/>
      <button onClick={() => handleButtonClick('Segregated')}>Segregated Waste</button>
      <button onClick={() => handleButtonClick('Non-Segregated')}>Non-Segregated Waste</button>
    </div>
  );
};

export default AdminPage;