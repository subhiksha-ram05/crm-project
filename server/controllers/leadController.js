const Lead = require("../models/Lead");

// Create Lead
const createLead = async (req, res) => {
  try {
    const { name, email, phone, company } = req.body;

    const lead = await Lead.create({
      name,
      email,
      phone,
      company,
      assignedTo: req.user.id,
    });

    res.status(201).json({
      message: "Lead Created Successfully",
      lead,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Leads
const getLeads = async (req, res) => {
  try {
    const leads = await Lead.find().populate(
      "assignedTo",
      "name email"
    );

    res.status(200).json({
      count: leads.length,
      leads,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Lead Status
const updateLeadStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const lead = await Lead.findById(req.params.id);

    if (!lead) {
      return res.status(404).json({
        message: "Lead not found",
      });
    }

    lead.status = status;

    await lead.save();

    res.status(200).json({
      message: "Lead Status Updated Successfully",
      lead,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createLead,
  getLeads,
  updateLeadStatus,
};