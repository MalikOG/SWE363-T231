// Import libraries
const fs = require('fs')
const path = require('path')
const process=require('process')

// srcDir "/Users/malik/Study/KFUPM/T231/SWE363/Web-Dev-Course/Exercises/04 JS/"
// trgDir "/Users/malik/Study/KFUPM/T231/SWE363/SWE363-T231-03/BE02/EX02/"

// Folder Paths & Extension 
const srcDir=process.argv[2]
const trgDir=process.argv[3]
const fileExtension=".pdf"


fs.readdir(srcDir, (err, files) => {
    if (err) {
        console.error(`Error reading directory: ${err}`);
        process.exit(1);
    }
    else {
        console.log(`Files in directory ${files}`)
        const matchingFiles=files.filter((file) => file.endsWith(fileExtension))
        console.log(`Files filtered ${matchingFiles}`)
        
        // Loop and copy filtered files
        for (const file of matchingFiles){
            fs.copyFile(`${srcDir}${file}`, `${trgDir}${file}`, (err) => {
                if (err) {
                  console.log("Error Found:", err)
                }
            })
        }
    }
})


