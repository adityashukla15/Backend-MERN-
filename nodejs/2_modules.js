const fs=require('fs')
fs.writeFile("2_moduleoutput.txt","File wriiten",(err)=>{
    if(err){
        console.log("Some error in the file")
    }
    else{
        console.log("File is made")
    }
})