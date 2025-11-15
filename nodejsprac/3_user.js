const fs=require('fs')
fs.writeFile("3_user.txt","My fav chai is red tea",(err)=>{
    if(err) console.log("Error in file")
    else console.log("File written sucessfully")
})
