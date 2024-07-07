const express =require('express')

const router = express.Router();

const person = require("../models/person");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new person(data);

    const responeSave = await newPerson.save();
    console.log("save");
    res.status(200).json(responeSave);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "interneral error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await person.find();
    console.log("fatch data");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "interneral error" });
  }
});

router.get("/:worktype", async (req, res) => {
  try {
    const worktype = req.params.worktype;
    if (worktype == "saif" || worktype == "waiter" || worktype == "person") {
      const respone = await person.find({ work: worktype });
      console.log("respone fatched");
      res.status(200).json(respone);
    } else {
      res.status(500).json({ error: "invalid worktypes" });
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: "interneral error" });
  }
});

router.put('/:id',async (req,res)=>{

    try {
        
        const personId = req.params.id;
        const updatedata = req.body;

        const respone = await person.findByIdAndUpdate(personId, updatedata,{
            new : true,
            runValidators:true
        });

        if(!respone)
        {
            return res.status(404).json({error:"person not found"})
        }

        console.log('data updated');
        res.status(200).json(respone)

    } catch (error) {
        
        console.log(error);
        res.status(404).json({ error: "interneral error" });
    }

})

router.delete('/:id',async (req,res) =>{
    try {
        
        const personId = req.params.id;
        const respone = await person.findByIdAndDelete(personId)
        if(!respone)
        {
             return res.status(404).json({error:"person not found"})
        }

        console.log("data delete");
        res.status(200).json({msg:"Data delete succesfully"});
    } catch (error) {
        console.log(error);
        res.status(404).json({ error: "interneral error" });

    }
})

module.exports = router