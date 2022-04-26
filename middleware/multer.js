const multer  = require("multer");

const storage = multer.diskStorage({});

const fileFilter  = (req,file,cb) =>
{
   //console.log(req.body);
  //console.log(file);
   
    if(!file.mimetype.includes("image"))
    {
       // console.log( typeof file);
        return cb("Invalid-image-format!",false);
    }
    cb(null,true);

};

module.exports = multer({storage, fileFilter});