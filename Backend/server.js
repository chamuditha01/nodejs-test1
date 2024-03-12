const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors()); // Add this line to enable CORS


// MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'crud'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database.');
});

// API endpoint to handle profile data submission
app.post('/api/profiles', (req, res) => {
  const { id, name, phone, image } = req.body;

  const profile = {
    id,
    name,
    phone,
    image: image ? Buffer.from(image, 'base64') : null
  };
  
  

  connection.query('INSERT INTO users SET ?', profile, (err, result) => {
    if (err) {
      console.error('Error inserting data into MySQL:', err);
      res.status(500).send('Error saving profile data.');
      return;
    }
    console.log('Profile data saved:', result);
    res.status(200).send('Profile data saved successfully.');
  });
});

app.get('/', (req, res) => {
    res.json({ message: 'Hello, World!' });
    });
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
