const User = require("./../model/user");

exports.getOverview = async (req, res) => {
  try {
    const users = await User.find();
    // console.log(users);
    // console.log(req.body);

    res.status(200).render("overview", {
      title: "Overview",
      users
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: { err }
    });
  }
};

exports.donate = async (req, res) => {
  try {
    res.status(200).render("donate", {
      title: "Donate"
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: { err }
    });
  }
};
