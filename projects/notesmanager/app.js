const notes = require('./notes');

const command = process.argv[2];
const inputText = process.argv[3];

if (command === "add") {
    notes.addNote(inputText);
}
else if (command === "list") {
    notes.listNotes();
}
else if (command === "remove") {
    notes.removeNote(inputText);
}
else {
    console.log("Unknown command!");
}
