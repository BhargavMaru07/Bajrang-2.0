
const ADDRESS = require("../models/address_model");


//Add Address
const addAddress = async (req,res)=>{
    try {
        const {
          data: {
            fullName,
            phoneNumber,
            houseNumber,
            area,
            city,
            state,
            pincode,
            selectedType,
            isDefaultAddress,
          },
          createdBy,
        } = req.body;
        const address = await ADDRESS.create({
          fullName,
          phoneNumber,
          houseNumber,
          area,
          city,
          state,
          pincode,
          selectedType,
          isDefaultAddress,
          createdBy
        });

        console.log(address);

    return res.status(201).json({ msg: "address Created !"});
        
    } catch (error) {
    return res.status(400).json({ msg: error });
        
    }
}


//GetAddress
const getAddress = async (req, res) => {
  try {
    const { createdBy } = req.query; 
    if (!createdBy) {
      return res.status(400).json({ msg: "Missing createdBy in query" });
    }
    const address = await ADDRESS.find({ createdBy });
    console.log(address);
    return res.status(200).json(address);
  } catch (error) {
    return res.status(400).json({ msg: "Error in getAddress" });
  }
};



module.exports = {
  addAddress,
  getAddress,
};