const gadget = require("../model/gadget");


const gadgetinfo=async(req,res)=>{
    const newGadget= await gadget.find({});
   
    res.status(200).json({
        success:true,
        newGadget
    });
}

const singlegadget=async(req,res)=>{
    const _id=req.params.id;
    const Gadget=await gadget.findById({_id});
    const probability=`${Math.floor(Math.random()*100)} %`;
    
    res.status(200).json({Gadget,probability});
}


const create=async(req,res)=>{
    const data =req.body;
    const newGadget= await gadget.create(data);
    res.status(200).json({
        success:true,
        Data:newGadget
    })

}

const random=async(req,res)=>{
    const _id=req.params.id;
    const Gadget=await gadget.find({_id});
    const code=`${Math.floor(Math.random()*45691)}`;
    
    res.status(200).json({code});
}

const gadgetdel=async(req,res)=>{
    const { id } = req.params;
// console.log(req.params)
    try {
      const updatedGadget = await gadget.findByIdAndUpdate(
        id,
        {
          status: 'Decommissioned',
          decommissionedAt: new Date()
        },
        { new: true } 
      );
  
      if (!updatedGadget) {
        return res.status(404).json({ message: 'Gadget not found' });
      }
  
      res.status(200).json({
        message: 'Gadget decommissioned successfully',
        gadget: updatedGadget
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error while decommissioning gadget' });
    }
  };

  const gadgetdetail=async(req,res)=>{
    const {status}=req.query;
    console.log(req.query)
    try {
       const query=status ? {status} :{};
        // console.log(query);
       const Gadgetinfo=await gadget.find(query);
      //  console.log(Gadgetinfo)
        res.status(200).json({
            success:true,
            data:Gadgetinfo
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:'server not fund '
        })
    }
  }

module.exports={gadgetinfo,create,singlegadget,random,gadgetdel,gadgetdetail};