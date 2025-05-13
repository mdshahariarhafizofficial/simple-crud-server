const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;


// Middleware
app.use(cors());
app.use(express.json())

// Db info
// user: simpleDbUser
// Pass: CBNP4kmhFG4fpNd9

app.get('/', (req, res) => {
    res.send('Hlw Dev');
} );

app.listen(port, () => {
    console.log(`Application running in Port : ${port}`);
    
} )