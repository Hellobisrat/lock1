const router = require('express').Router();
const Lock = require('../../models/Lock');
const withAuth = require('../../utils/auth');


router.post('/add_lock',withAuth,async(req,res)=>{
  try {

    const [ Site, Username, Password ] =  await req.params.body
    const lock = await Lock.create({
      Site,Username,Password
     }).catch(error=>console.log(error))
     console.log(lock)
     res.render('new',{lock})
  } catch (error) {
    res.status(400).json(error)
  }
})
