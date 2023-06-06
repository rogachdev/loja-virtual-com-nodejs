import express from 'express';
// import bodyParser from 'body-parser';

const app = express();
// app.use(bodyParser.json());
app.use((req, res, next) => {
    console.log('Will run before any route');
    next();
})
app.get('/', function (req, res, next) {
	console.log('route / called');
	res.send('Hello World!');
});

app.listen(3000, () => {
	console.log('listening on port 3000');
});
