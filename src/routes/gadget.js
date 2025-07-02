const express=require('express');
const router=express.Router();
const {gadgetinfo,create, singlegadget, random,gadgetdel,gadgetdetail, gadgetupdate} = require('../controller/gadget');

router.route('/gadget').get(gadgetdetail)
router.route('/').get(gadgetinfo);
router.route('/').post(create);
router.route('/:id').get(singlegadget)
router.route('/gadgets/:id/self-destruct').post(random);
router.route('/:id').delete(gadgetdel);
router.route('/:id').patch(gadgetupdate)

module.exports=router;