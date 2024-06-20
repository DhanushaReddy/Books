const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
const PORT = 3000;
const MONGO_URI = 'mongodb://localhost:27017/book-directory';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use(bodyParser.json());
app.use(cors());  
app.use('/api', bookRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Book Directory API');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
