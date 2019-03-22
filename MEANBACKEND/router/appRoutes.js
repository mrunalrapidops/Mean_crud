var express = require("express");
var Country = require('../models/dataSchema');
var router = express.Router();
router.post('/create',(req,res,next)=>{
      var newCountry = new Country({
        name:req.body.name,
        capital:req.body.capital
    });  
    //console.log(typeof(req.body));
      newCountry.save((err,country)=>{
        if(err){
            res.status(500).json({errmsg:err})
        }
        else{
            res.status(200).json({msg:country});
        }
    }) 
     //res.status(200).json({meg:'post req is working'});
})
router.get('/read',(req,res,next)=>{
    Country.find({},(err,countries)=>{
        if(err){
        res.status(500).json({errmsg:err})
    }
    else{
        res.status(200).json({msg:countries});
    }
    });
    //res.status(200).json({meg:'get req is working'});
})
router.put('/update',(req,res,next)=>{
    Country.findById(req.body._id,(err,country)=>{
        if(err){
            res.status(500).json({errmsg:err})
        }
        else{
            country.name = req.body.name,
            country.capital = req.body.capital
            country.save((err,country)=>{
                if(err){
                    res.status(500).json({errmsg:err})
                }
                else{
                    res.status(200).json({msg:country});
                }
            })
        }
    })
    //res.status(200).json({meg:'put req is working'});
})
router.delete('/delete/:id',(req,res,next)=>{
    Country.findOneAndRemove({_id:req.params.id},(err,country)=>{
        if(err){
            res.status(500).json({errmsg:err})
        }
        else{
            res.status(200).json({msg:country});
        }
    })
    //res.status(200).json({meg:'delete req is working'});
})
module.exports = router;