import { Contact } from "../models/contactModel.js";

// controller to add contact form data to database
const addContactFormData = async (req, res) => {
  // destructuring data that we will fetch from the form
  const { name, companyName, email, phoneNumber } = req.body;

  // validation - check if name and phoneNumber is not given data will not go into database
  if (!name || !phoneNumber) {
    return res.status(201).send({
      message: "Name or phone number both required",
    });
  }

  // see if contact form data already exists in the database or not
  const contactDataExists = await Contact.findOne({phoneNumber});

  if (contactDataExists) {
    return res.status(401).send({
      message: "Contact details already exists",
    });

    // this will help in keep running the connection and continue the process and not stop the connection when contact data exists found
    // return;
  }

  // create schema
  const contactFormData = new Contact({
    name,
    companyName,
    email,
    phoneNumber,
  });

  try {
    // save the data in the database with save method
    await contactFormData.save();

    return res.status(201).send({
      message: "Data saved successfully",
    });
  } catch (err) {
    return res.status(400).send({
      message: " Data not saved",
    });
  }
};

// get all contact form data from the database
const getAllContactFormData = async (req, res) => {
  try {
    const getContactFormData = await Contact.find({});

    return res.status(200).json(getContactFormData);
  } catch (err) {
    return res.status(400).send({
      message: `cannot fetch data from database. ${err}`,
    });
  }
};

// exporting methods to use in contactRoutes.js file
export { getAllContactFormData, addContactFormData };
