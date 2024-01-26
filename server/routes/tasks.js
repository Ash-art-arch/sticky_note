const express = require("express");

const route = express.Router();

let notes = [];

route.get('/api/notes', (req, res) => {
    res.json(notes);
});

route.post('/api/notes', (req, res) => {
    const newNote = req.body;
    notes.push(newNote);
    res.json(newNote);
});

route.put('/api/notes/:id', (req, res) => {
    const id = req.params.id;
    const newText = req.body.text;
    const noteIndex = notes.findIndex(note => note.id === id);

    if (noteIndex !== -1) {
        notes[noteIndex].text = newText;
        res.json(notes[noteIndex]);
    } else {
        res.status(404).json({ error: 'Note not found' });
    }
});

route.delete('/api/notes/:id', (req, res) => {
    const id = req.params.id;
    notes = notes.filter(note => note.id !== id);
    res.json({ message: 'Note deleted successfully' });
});