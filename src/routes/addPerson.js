const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
let Person=require('../models/persons');


router.get('/person',  (req, res) => {
    res.render('addPerson'); 
});

router.post('/displayPerson', (req, res) => { 
   const persona=Person({"nombre":req.body.nombre,"edad": req.body.edad, "nss": req.body.nss, "tipoSangre":req.body.tipoSangre}); 
    persona.save().then(()=>{res.redirect('gente')});

})

module.exports = router;