const express = require('express');
const app = express();

app.use(express.json());

const userRouter = require('./routes/user.routes');
app.use('/user', userRouter);

const addressRouter = require('./routes/address.routes');
app.use('/address', addressRouter);

app.listen(4000, () => {
	console.log('Server running');
});
