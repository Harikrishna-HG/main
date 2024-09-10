const Contact = require("../models/contact-model"); 

const contactForm = async (req, res)=>{
  try{
    const response = req.body;
    await Contact.create(response);
    return res.status(200).json({message: "message send successfully"});
  }
catch(error){
  console.error("Error in contact form submission: ", error);
  return res.status(500).json({message:"message is not delievered"});
}};

module.exports = contactForm;