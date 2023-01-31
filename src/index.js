const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send('Server rodando normal');
})


const PORT = 4000;
app.listen(PORT, () => console.log(`Server is running at ${PORT}`))
