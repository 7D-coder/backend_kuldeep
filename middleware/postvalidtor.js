const {check , validationResult } = require("express-validator");

exports.postvalidator = [
    check("title").trim().not().isEmpty().withMessage("post title is missing!"),
    check("content").trim().not().isEmpty().withMessage("post content is missing!"),
    check("meta").trim().not().isEmpty().withMessage("Meta descripation is missing!"),
    check("slug").trim().not().isEmpty().withMessage("post slug is missing!"),
    check("tags")
        .isArray()
        .withMessage("Tags must be array of strings!")
        .custom((tags)=>{
            for(let t of tags)
            {
                if(typeof t !== "string")
                {
                    throw Error("tags must be oa array of strings!");
                }
            }
            return true;
        }),



];

exports.validate = (req,res,next) =>{
    const error = validationResult(req).array();
    if(error.length)
    {
        return res.status(401).json({error: error[0].msg});
    }
    next();
};