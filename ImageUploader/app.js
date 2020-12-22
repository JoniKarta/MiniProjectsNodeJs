
const express = require('express');
const fileUploader = require('express-fileupload');
const server = express();
const fs = require('fs');
const uuid = require('uuid');

if(!fs.existsSync('./assets/images')){
   fs.mkdirSync('./assets');
   fs.mkdirSync('./assets/images');
}

server.use(express.static(__dirname));
server.use(fileUploader()); 

server.post('/upload', (req, res)=> {
    console.log(req.files)
    const images = Array.isArray(req.files.images) ? req.files.images: [req.files.images];
    
    for(const image of images){
        const ext = image.name.substr(image.name.lastIndexOf('.'));
        image.name = uuid.v4() + ext;
        image.mv('./assets/images/' + image.name);
    }
    res.status(200).send('File uploaded successfully');
});

server.use('*', (req, res)=> {    
    res.status(404).send("The route " + req.route + " not found");
});


server.listen(3000, ()=> console.log("The server is up and running on http://localhost:3000"));
