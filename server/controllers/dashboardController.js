const Customer = require("../models/Customer");
const Lead = require("../models/Lead");

const getDashboard = async (req, res) => {
  try {
    const totalCustomers = await Customer.countDocuments();

    const totalLeads = await Lead.countDocuments();

    const newLeads = await Lead.countDocuments({
      status: "New",
    });

    const contacted = await Lead.countDocuments({
      status: "Contacted",
    });

    const qualified = await Lead.countDocuments({
      status: "Qualified",
    });

    const won = await Lead.countDocuments({
      status: "Won",
    });

    const lost = await Lead.countDocuments({
      status: "Lost",
    });

    res.status(200).json({
      totalCustomers,
      totalLeads,
      leadStatus: {
        newLeads,
        contacted,
        qualified,
        won,
        lost,
      },
      loggedInUser: req.user,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getDashboard,
};