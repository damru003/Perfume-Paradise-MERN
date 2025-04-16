import jwt from 'jsonwebtoken';

const authUser = async (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    console.log("❌ No token found in headers");
    return res.status(401).json({ success: false, message: "Not Authorised" });
  }

  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    console.log("✅ Token decoded:", token_decode);

    req.body.userId = token_decode.id;
    next();
  } catch (error) {
    console.log("❌ Token Verification Failed:", error);
    res.status(401).json({ success: false, message: error.message });
  }
};
export default authUser;
