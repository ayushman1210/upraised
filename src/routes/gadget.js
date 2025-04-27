const express=require('express');
const router=express.Router();
const {gadgetinfo,create, singlegadget, random,gadgetdel,gadgetdetail} = require('../controller/gadget');

router.route('/gadget').get(gadgetdetail)
router.route('/').get(gadgetinfo);
router.route('/').post(create);
router.route('/:id').get(singlegadget)
router.route('/:id/self-destruct').post(random);
router.route('/:id').delete(gadgetdel);

module.exports=router;