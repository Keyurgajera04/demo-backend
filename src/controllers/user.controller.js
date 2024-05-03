import { asyncHandler } from "../utils/aysncHandler.js";

const registerUser = asyncHandler ( async (req,res) => {
    res.status(200).json({
        message:"Post man done"
    })
})

export{
    registerUser
}