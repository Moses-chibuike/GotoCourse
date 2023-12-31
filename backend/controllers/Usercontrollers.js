const User = require("../models/User");
const asyncHandler = require("../utils/asyncWrapper");
const ErrorResponse = require("../utils/errorResponse");






// Get Token  and send cookie response

const sendTokenResponse = (user, statusCode, res) => {
    const token = user.getSignedJwtToken();
  
    const options = {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };
  
    if (process.env.NODE.env === "production") {
      options.secure = true;
    }
    res.cookie("token", token, options)
    res.status(statusCode).json({
      data:user.name,
      status: "success",
      token,
    });
  };
  

// @desc     Register User
// @route   /api/v1/auth/register
// @access   Public

exports.register = asyncHandler(async (req, res, next) => {
  const { name, email, password, role } = req.body;
  if (!email || !password || !name) {
    return next(new ErrorResponse("please enter email and password"));
  }

  const user = await User.create({
    name,
    email,
    password,
    role,
  });

  sendTokenResponse(user, 200, res);
});
exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorResponse("please enter email and password"));
  }

  // check user in  DB
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorResponse("No User  found", 401));
  }

  // compare password

  const matchPassword = await user.matchPassword(password);

  if (!matchPassword) {
    return next(new ErrorResponse("Invalid Credentials", 401));
  }

  sendTokenResponse(user, 200, res);
});