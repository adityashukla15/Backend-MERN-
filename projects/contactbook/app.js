const contacts=require("./contact")
const command = process.argv[2];
const arg1 = process.argv[3];
const arg2 = process.argv[4];
if(command=="add"){
    contacts.addContact(arg1,arg2)
}
else if(command=="list"){
    contacts.listContact()
}
else if(command=="search"){
    contacts.seacrhContact(arg1)
}
else if(command=="remove"){
    contacts.removeContact(arg1)
}
else{
    console.log("Unkown Contact")
}
