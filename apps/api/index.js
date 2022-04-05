const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (_, res) => {
    res.send({ test: "Hello World!" })
})

app.listen(8000, () => console.log('Server is up and running'));
