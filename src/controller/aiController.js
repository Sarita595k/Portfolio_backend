import { GoogleGenerativeAI } from "@google/generative-ai";

export const getProjectAiDetails = async (req, res) => {
    const { projectName, techStack } = req.body;

    try {
        // 1. Initialize inside the function to ensure process.env is ready
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

        // 2. IMPORTANT: You are still using gemini-2.5-flash in your previous snippet.
        // Change it to gemini-1.5-flash to match your working projects.
        const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });

        const prompt = `
            You are a Senior Tech Lead. Analyze the project "${projectName}" built with ${techStack}.
            Return ONLY a JSON object with these exact keys:
            "projectName": "${projectName}",
            "whyDesigned": "one paragraph explaining the problem solved",
            "benefits": ["benefit 1", "benefit 2", "benefit 3"],
            "aiIntegration": "how AI improves this specific app",
            "futureRoadmap": ["feature 1", "feature 2", "feature 3"]
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // FIX: Extract the first match and parse it
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (!jsonMatch) throw new Error("No JSON found in response");

        const aiData = JSON.parse(jsonMatch); // Accessing index 0 is required

        res.status(200).json(aiData);
    } catch (error) {
        console.error("AI Controller Error:", error.message);
        res.status(500).json({
            message: "AI Analysis failed",
            error: error.message
        });
    }
};