const router = require('express').Router();
const data = require('../addressData');

const { v4: uuid } = require('uuid');

//CREATE
router.post('/create-address', (req, res) => {
	data.push({ ...req.body, id: uuid() });

	res.status(201).json({ message: 'created', data: data });
});

//READ
router.get('/address-detail/:id', (req, res) => {
	const { id } = req.params;

	const document = data.filter((currentElement) => currentElement.id === id);
	return res.status(201).json(document[0]);
});

//UPDATE
router.put('/edit-address/:id', (req, res) => {
	const { id } = req.params;

	data.forEach((currentElement, i) => {
		if (currentElement.id === id) {
			data[i] = { ...req.body, id: currentElement.id };
		}
	});
	const document = data.filter((currentElement) => currentElement.id === id);
	return res.status(200).json(document[0]);
});

//DELETE
router.delete('/delete-address/:id', (req, res) => {
	const { id } = req.params;

	const document = data.filter((currentElement) => currentElement.id === id);

	const index = data.indexOf(document[0]);
	data.splice(index, 1);

	return res.status(200).json(data);
});

module.exports = router;
