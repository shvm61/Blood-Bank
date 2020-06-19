const User = require("./../model/user");
const ApiFeatures = require("./../util/ApiFeatures");

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json({
      status: "success",
      results: user.length,
      data: { user }
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: { err }
    });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const features = new ApiFeatures(User.find(), req.query).filter().sort();
    const users = await features.query;
    // console.log(req.query);
    // const users = await User.find();
    res.status(200).json({
      status: "success",
      results: users.length,
      data: { users }
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: { err }
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const users = await User.findById(req.params.id);
    res.status(200).json({
      status: "success",
      results: users.length,
      data: { users }
    });
  } catch (err) {
    res.status(400).json({
      status: "fail at getUser",
      message: { err }
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const users = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    res.status(200).json({
      status: "success",
      results: users.length,
      data: { users }
    });
  } catch (err) {
    res.status(400).json({
      status: "fail at getUser",
      message: { err }
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const users = await User.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      results: users.length,
      data: { users }
    });
  } catch (err) {
    res.status(204).json({
      status: "fail at deleteUser",
      message: { err }
    });
  }
};
