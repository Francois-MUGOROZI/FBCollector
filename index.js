const expresss = require('express');
const app = expresss(); //initialize app

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

const PORT = process.env.PORT || 5000
app.listen(PORT);
