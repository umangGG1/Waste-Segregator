const express=require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT||80;
app.use(cors());
app.use(express.json());
mongoose.connect('mongodb+srv://ecoiitrwate_database:ecoiitr987654321@cluster0.a3dwrz1.mongodb.net/?retryWrites=true&w=majority',{
  useNewUrlParser:true,
  useUnifiedTopology:true,
}).then(()=>{
console.log("db is connected..")}).catch((err)=>
console.log("not connected.."));
const WasteDataSchema = new mongoose.Schema({
userId:String,
wasteType:String,
});
const RajendraBhawan = mongoose.model('rajendra_bhawan', WasteDataSchema);
const GangaBhawan = mongoose.model('ganga_bhawan', WasteDataSchema);
const JawaharBhawan = mongoose.model('jawahar_bhawan', WasteDataSchema);
const RajivBhawan = mongoose.model('rajiv_bhawan', WasteDataSchema);
const KBBhawan = mongoose.model('KB_bhawan', WasteDataSchema);
const GovindBhawan = mongoose.model('govind_bhawan',WasteDataSchema);
app.post('/store-data', async (req, res) => {
  try {
    const { userId, wasteType, bhawan } = req.body;
    let collection;
    switch (bhawan){
      case 'rajendra':
        collection=RajendraBhawan;
        break;
      case 'rajiv':
          collection =RajivBhawan;
          break;
      case 'KB':
            collection =KBBhawan;
            break;
      case 'govind':
              collection =GovindBhawan;
              break;
      case 'ganga':
        collection = GangaBhawan;
        break;
      case 'jawahar':
        collection = JawaharBhawan;
        break;
      default: 
    return res.status(400).json({ error: 'Invalid Bhawan' });
    }
    const newData = await collection.create({userId,wasteType});
    await newData.save();
    res.json(newData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.listen(PORT,() => {
  console.log(`Server is running on http://localhost:${PORT}`);
});