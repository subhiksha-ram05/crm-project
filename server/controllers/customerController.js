const Customer = require("../models/Customer");

// Create Customer
const createCustomer = async (req, res) => {
  try {
    const { name, email, phone, company, address } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({
        message: "Please fill all required fields",
      });
    }

    const existingCustomer = await Customer.findOne({ email });

    if (existingCustomer) {
      return res.status(400).json({
        message: "Customer already exists",
      });
    }

    const customer = await Customer.create({
      name,
      email,
      phone,
      company,
      address,
      assignedTo: req.user.id,
    });

    res.status(201).json({
      message: "Customer Created Successfully",
      customer,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Customers
const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find().populate(
      "assignedTo",
      "name email role"
    );

    res.status(200).json({
      count: customers.length,
      customers,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Customer by ID
const getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id).populate(
      "assignedTo",
      "name email role"
    );

    if (!customer) {
      return res.status(404).json({
        message: "Customer not found",
      });
    }

    res.status(200).json(customer);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Customer
const updateCustomer = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);

    if (!customer) {
      return res.status(404).json({
        message: "Customer not found",
      });
    }

    customer.name = req.body.name || customer.name;
    customer.email = req.body.email || customer.email;
    customer.phone = req.body.phone || customer.phone;
    customer.company = req.body.company || customer.company;
    customer.address = req.body.address || customer.address;

    const updatedCustomer = await customer.save();

    res.status(200).json({
      message: "Customer Updated Successfully",
      customer: updatedCustomer,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Customer
const deleteCustomer = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);

    if (!customer) {
      return res.status(404).json({
        message: "Customer not found",
      });
    }

    await customer.deleteOne();

    res.status(200).json({
      message: "Customer Deleted Successfully",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createCustomer,
  getCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};