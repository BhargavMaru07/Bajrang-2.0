const ADDRESS = require("../models/address_model");

//Add Address
const addAddress = async (req, res) => {
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
      createdBy,
    });

    return res.status(201).json({ msg: "address Created !" });
  } catch (error) {
    return res.status(400).json({ msg: error });
  }
};

//GetAddress
const getAddress = async (req, res) => {
  try {
    const { createdBy } = req.query;
    if (!createdBy) {
      return res.status(400).json({ msg: "Missing createdBy in query" });
    }
    const address = await ADDRESS.find({ createdBy });
    return res.status(200).json(address);
  } catch (error) {
    return res.status(400).json({ msg: "Error in getAddress" });
  }
};

//update Address...
const updateAddress = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body.data;

    const address = await ADDRESS.findByIdAndUpdate(id, data, { new: true });
    if (!address) return res.status(404).json({ msg: "Address not found" });

    res.status(200).json({ msg: "Address updated successfully", address });
  } catch (error) {
    res.status(400).json({ msg: "Failed to update address", error });
  }
};

module.exports = {
  addAddress,
  getAddress,
  updateAddress,
};
