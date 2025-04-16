import userModel from "../models/userModel.js";
import validator from "validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


const createToken = async (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
};


const loginUser = async (req, res) => {
    try {

        const { email, password } = req.body;

        const user = await userModel.findOne({ email })

        if (!user) {
            return res.status(404).json({ success: false, message: "User doesn't exist." });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            const token = await createToken(user._id);
            res.status(200).json({ success: true, token });
        } else {
            return res.status(401).json({ success: false, message: "Invalid password." })
        }

    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ success: false, message: "Server error. Please try again later." });
    }
};


const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const exists = await userModel.findOne({ email })

        if (exists) {
            return res.json({ success: false, message: "User Already Exist.." })
        }

        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please Enter valid Email Address.." })
        }

        if (password.length < 8) {
            return res.json({ success: false, message: "Please Enter a Strong Password.." })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        });

        const user = await newUser.save();

        const token = await createToken(user._id);


        return res.status(201).json({ success: true, token });


    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Server error. Please try again later." });
    }
};


const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email + password, process.env.JWT_SECRET);
            res.json({ success: true, token })
        }
        else {
            res.json({ success: false, message: "Invalid Username And Password..." })
        }
    }
    catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message })
    }
};


export { loginUser, registerUser, adminLogin }