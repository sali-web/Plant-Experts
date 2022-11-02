require('../models/database');
// const Category = require('../models/Category');
// const Recipe = require('../models/CareTips');

let Categories = require('../models/Category');
let CareTipss = require('../models/CareTips');
// let indoorplants= require('../models/IndoorPlants');
/**
 * GET
 * Homepage
 */

exports.homepage = async(req,res) => {
   
    try {
       
        const limitNumber = 5;
        const categories = await Categories.find({}).limit(limitNumber);
      //  const Indoor = await CareTipss.find({}).sort({_id: -1}).limit(limitNumber);
      //  const Indoor = await CareTipss.find({'category': 'Indoor'}).limit(limitNumber);
        const rare = await CareTipss.find({ 'category': 'Rare' }).limit(limitNumber);
        const succulent = await CareTipss.find({ 'category': 'Succulent' }).limit(limitNumber);
        const hanging = await CareTipss.find({ 'category': 'Hanging' }).limit(limitNumber);
        const indoorp= await CareTipss.find({'category':'Indoor'}).limit(limitNumber);
        console.log(indoorp);
    
        //const plant = { indoorp, rare, succulent, hanging }; 
        res.render('index',{ title: 'PlantExperts-Homepage',categoriesList: categories,indoor: indoorp,rare:rare,succulent:succulent,hanging:hanging} ); 
    } catch (error) {
        res.status(500).send({message: error.message || "Error Occured" });
      }
}

exports.exploreCategories = async(req, res) => {
      try {
        const limitNumber = 20;
        const categories = await Category.find({}).limit(limitNumber);
        res.render('categories', { title: 'PlantExperts', categories } );
      } catch (error) {
        res.status(500).send({message: error.message || "Error Occured" });
      }
} 

exports.exploreCategoriesById = async(req, res) => { 
      try {
        let categoryId = req.params.id;
        const limitNumber = 20;
        const categoryById = await CareTipss.find({ 'category': categoryId }).limit(limitNumber);
        res.render('categories', { title: 'PlantExperts - Categoreis', categoryById } );
      } catch (error) {
        res.status(500).send({message: error.message || "Error Occured" });
      }
} 

exports.exploreCareTips = async(req, res) => {
  try {
    let caretipsId = req.params.id;
    const caretips = await CareTipss.findById(caretipsId);
    res.render('caretips', { title: 'PlantExpert - CareTips', caretips } );
  } catch (error) {
    res.status(500).send({message: error.message || "Error Occured" });
  }
} 

exports.searchCareTips = async(req, res) => {
  try {
    let searchTerm = req.body.searchTerm;
    let caretips = await CareTipss.find( { $text: { $search: searchTerm, $diacriticSensitive: true } });
    //res.json(caretips);
    res.render('search', { title: 'PlantExpert - Search', caretips } );
  } catch (error) {
    res.status(500).send({message: error.message || "Error Occured" });
  }
  
}


    





