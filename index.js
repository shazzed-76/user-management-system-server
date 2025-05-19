const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3000;

const app = express();

//middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('server is running.....')
})


app.listen(port, () => {
    console.log('server in listening on port:', port)
})