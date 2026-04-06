export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }
        const newUser = await Users.create({ name, email, password })
        res.status(200).json({
            success: true,
            message: "User created successfully",
            user: {
                name: newUser.name,
                email: newUser.email
            }
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "All fields are required",
            error: error
        })
    }

}

