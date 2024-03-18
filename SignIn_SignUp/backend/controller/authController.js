const userModel = require("../model/userSchema");
const emailValidator = require('email-validator');

// controller intract with database
const signup = async (req, res, next) => {
    const { name, email, password, confirmPassword } = req.body;
    console.log(name, email, password, confirmPassword);

    if (!name || !email || !password || !confirmPassword) {
        return res.status(400).json({
            success: false,
            message: "Every field required"
        })
    }

    const validEmail = emailValidator.validate(email);
    if (!validEmail) {
        return res.status(400, JSON({
            succes: false,
            message: "please provide a valid email id"
        }))
    }

    if (password != confirmPassword) {
        return res.status(400, josn({
            succes: false,
            message: "password and confirm password are not match"
        }))
    }

    try {
        const userInfo = userModel(req.body);
        const result = await userInfo.save();
        return res.status(200).json({
            succes: true,
            data: result
        });
    }
    catch (e) {
        if (e.code === 11000) {
            return res.status(400, json({
                succes: false,
                message: 'Account already exists with provided email id'
            }))
        }

    }
};

// sign In

const signin = async (req, res) => {
    const { email, password } = res.body

    if (!email || !password) {
        return res.status(400, josn({
            succes: false,
            message: "Every filed is mandorty to fill up"
        }))
    }
    const user = await userModel
        .findOne({
            email
        })
        .select('+password')

    if (!user || user.password === password) {
        return res.status(400, josn({
            succes: false,
            message: "Invalid credentials"
        }))
    }

    try {
        const token = user.jwtToken();
        user.password = undefined;

        const cookieOption = {
            maxAge: 24 * 60 * 60 * 1000,
            httpOnly: true
        };

        res.cookie("token", token, cookieOption);
        res.status(200, josn({
            succes: true,
            data: user
        }))
    }
    catch (e) {
        res.status(400, josn(
            {
                succes: false,
                message: e.message
            }
        ))
    }
}

// get user

const getUser = async (req, res, next) => {
    const userId = req.user.id;

    try {
        const user = await userModel.findById(userId)
        res.status(200).json({
            succes: true,
            data: user
        });
    }
    catch (e) {
        res.status(400).JSON({
            succes: false,
            message: e.message
        })
    }
}

module.exports = {
    signup,
    signin,
    getUser
}