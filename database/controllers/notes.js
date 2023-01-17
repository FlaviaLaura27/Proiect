const Note = require("../models/notes")

const getNote = async(req, res) => {
    const idNote = req.params.idNote; 
    try {
        const note = await Note.findOne({ where: {id: idNote} });
        res.status(200).send(note);
    } catch(e) {
        res.status(500).send({message: "Server error", e});
    }
};

const createNote
 = async(req, res) => {
    const idNote = req.params.idNote; 
    try {
        const newNote = await Note.create(req.body);
        return res.status(200).json(newNote);
    } catch(err) {
        return res.status(500).json(err);
    }
};

const getAllNotes = async(req, res) => {
    try {
        const notes = await Note.findAll();
        return res.status(200).json(notes);
    } catch (err) {
        return res.status(500).json(err);
    }
}

const updateNote = async (req, res) => {
	try {
		const { id } = req.params;

		const note = await Employee.findOne({ where: { id } });

		if (note) {
			note.date = req.body.date;
            note.title = req.body.title;
            note.information = req.body.information;

			await note.save();

			res.status(201).send({ message: "Note updated", note: note });
		}
	} catch (e) {
		console.error(e);
		res.status(500).send({ message: "server error" })
	}
}

module.exports = {
	createNote,
	getNote,
	updateNote,
	getAllNotes
};