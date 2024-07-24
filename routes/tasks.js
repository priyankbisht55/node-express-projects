import express from "express";
const router = express.router();

router.route('/').get((req,res) =>{
    res.send('all items');
});

module.exports = router