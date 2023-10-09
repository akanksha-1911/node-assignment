const meal = require('../models/meal.json');


exports.getmealList = (req,res)=>{
    const result =meal.map(item=>item.name);
    res.status(200).json({
        message:"meal list loaded successfully",
        meal: result
    })

}