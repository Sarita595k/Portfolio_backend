import Contact from '../model/detailsModel.js';

export const submitContactForm = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // Basic validation
        if (!name || !email || !message) {
            return res.status(400).json({ message: "Please fill all required fields." });
        }

        const newContact = new Contact({ name, email, subject, message });
        await newContact.save();

        res.status(201).json({ success: true, message: "Message saved successfully!" });
    } catch (error) {
        console.error("Contact Controller Error:", error);
        res.status(500).json({ success: false, message: "Server Error. Please try again later." });
    }
};