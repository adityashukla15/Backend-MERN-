const fs=require('fs')
const { json } = require('stream/consumers')
const loadContact=()=>{
   try {
    const dataBuffer=fs.readFileSync("contacts.json","utf-8")
    return JSON.parse(dataBuffer)
   } catch (error) {
     return []
   }
}
const saveContact=(contacts)=>{
 fs.writeFileSync("contacts.json",JSON.stringify(contacts,null,2),"utf-8")
}
const addContact=(phone,name)=>{
    const contacts=loadContact()
    const exits=contacts.find(c=>c.phone==phone)
    if(exits){
        console.log("Contact already exits")
        return
    }
    contacts.push({name,phone})
    saveContact(contacts)
     console.log(`✔ Contact Added: ${name} (${phone})`);
}
const listContact=()=>{
    const contacts=loadContact()
    console.log("\n📒 Your Contacts:");
    contacts.forEach((c,i) => {
        console.log(`${i + 1}. ${c.name} - ${c.phone}`);
    });
}
const seacrhContact=()=>{
    const contacts=loadContact()
    const found=contacts.filter(c => c.name.toLowerCase().includes(name.toLowerCase()))
    if(found.length===0){
         console.log("❌ No contact found!");
        return;
    }
    console.log("\n🔍 Search Results:");
    found.forEach(c => {
        console.log(`${c.name} - ${c.phone}`);
    });
};
const removeContact=(phone)=>{
    const contact=loadContact()
    const filtered=contact.filter(c=>c.phone !==phone)
    if(filtered.length===contact.length){
         console.log("❌ Contact not found!");
        return;
    }
    saveContact(filtered)
    console.log(`✔ Contact Removed (${phone})`);
}
module.exports={addContact,listContact,seacrhContact,removeContact}