const express = require('express');
const box = express();
box.use(express.json())
const items = [];

//create a item record
box.post('/items', (req, res) => {
    try {
        const item = req.body;
        items.push(item);
        res.send(items);
    } catch (error) {
        res.send(error)
    }
});

//delete a item record
box.delete('/items/:id', (req, res) => {
    try {
        const index = items.findIndex(item =>
            item.id == req.params.id);
        items.splice(index, 1);
        res.send("Deleted")
        res.send(items)
    } catch (error) {
        res.send(error);
    }
})

//read item data
box.get('/items', (req, res) => {
    try {
        res.send(items)
    } catch (error) {
        res.send(error);
    }
});
//read item record with id
box.get('/items/:id', (req, res) => {
    try {
        const item = items.find(item =>
            item.id == req.params.id);
        res.send(item);
    } catch (error) {
        res.send(error);
    }
});

box.put('/items/:id', (req, res) => {
    try {
        const id = req.params.id;
        const index = items.findIndex((item) => item.id == id);
        items[index] = req.body;
        res.send(items);
    } catch (error) {
        res.send(error);
    }

})

box.listen(3003, () => {
    console.log("server is running on port 3003");
});