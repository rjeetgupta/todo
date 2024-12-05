import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { User } from "../models/user.model.js"

const registerUser = asyncHandler(async (req, res) => {
    const { fullName, email } = req.body
    if (
        [fullName, email].some(field => field?.trim() == "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    const existedUser = await User.findOne({ email })

    if (existedUser) {
        throw new ApiError(409, "User with this email is already exit")
    }

    const user = await User.create({
        fullName,
        email,
        password
    })

    return res.status(201).json(
        new ApiResponse(
            200,
            user,
            "User registered successfully"
        )
    )
})


const loggedInUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    if (!email) {
        throw new ApiError(400, "Email is required ")
    }

    const user = User.findOne({ email })

    if (!user) {
        throw new ApiError(404, "User does not exit")
    }

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                {
                    user
                },
                "User logged in Successfully"
            )
        )

})

export {
    registerUser,
    loggedInUser,
}