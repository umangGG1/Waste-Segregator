import React,  {useState} from 'react';
import QrReader from 'react-qr-scanner';
import axios from 'axios';
import './App.css';

const ScanPage= ()=>{
  const [code, setCode] = useState('');
  const [bhawan, setBhawan] = useState('');
  const [result, setResult] = useState('');


const handleScan = async(data)=>{
  if(data){
    setCode(data);
    try {
      const response = await axios.post('http://localhost:80/scan-data',{
        code:data,
        bhawan,
      });
      setResult(response.data.wasteType);
    } catch (error) {
      console.log('Error Scanning data: ', error.response?.data||error.message)
    }
  }
};
const handleError= (error)=>{
  console.error("Qr code scan error: " , error)
};

return(
  <div>
    <h1>QR Code Scanner Page</h1>
    <QrReader
    delay = {300}
    onError = {handleError}
    onScan = {handleScan}
    style = {{width: '100%'}}
    />
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
    <p>Scanned QR Code: {code}</p>
    {result&&<p>Result: {result}</p>}
  </div>
)};

export default ScanPage;