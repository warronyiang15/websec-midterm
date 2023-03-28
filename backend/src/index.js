import express from 'express';

const port = process.env.PORT || 8000;

const app = express();


app.get('/', (req, res) => {
    res.send("<h1>WTF</h1>");
});

app.listen(port, () => {
    console.log('hi');
});
