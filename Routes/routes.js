const express = require('express');


var CityListController = require('../Controllers/City');
var RestaurantsController = require('../Controllers/Restaurants');
var mealController = require('../Controllers/meal')



const router =express.Router();

router.get('/getCityList',CityListController.getCityList);
router.get('/getRestaurantsByCityName/:cityName' , RestaurantsController.getRestaurantsByCityName);
router.get('/getmealList', mealController.getmealList );


module.exports = router;