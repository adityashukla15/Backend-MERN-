const fs = require("fs");

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json", "utf-8");
        return JSON.parse(dataBuffer);
    } catch (e) {
        return [];
    }
};

const saveNotes = (notes) => {
    fs.writeFileSync("notes.json", JSON.stringify(notes, null, 2), "utf-8");
};

const addNote = (noteText) => {
    const notes = loadNotes();
    notes.push({ text: noteText });
    saveNotes(notes);
    console.log("Note added:", noteText);
};

const listNotes = () => {
    const notes = loadNotes();
    console.log("\nYour Notes:");
    notes.forEach((note, index) => {
        console.log(`${index + 1}. ${note.text}`);
    });
};

const removeNote = (noteText) => {
    const notes = loadNotes();
    const filtered = notes.filter((n) => n.text !== noteText);

    if (filtered.length === notes.length) {
        console.log("Note not found!");
    } else {
        saveNotes(filtered);
        console.log("Note removed:", noteText);
    }
};

module.exports = { addNote, listNotes, removeNote };
