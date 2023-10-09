const city = require('../models/city.json');


exports.getCityList = (req,res)=>{
    const result =city.map(item=>item.name);
    res.status(200).json({
        message:"City list loaded successfully",
        city: result
    })

}