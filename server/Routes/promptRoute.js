const express = require("express");
const OpenAI = require("openai");
require("dotenv").config();

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI,
});

router.post("/artist", async (req, res) => {
  try {
    const { musicData } = req.body;

    const prompt = `User listens to a lot ${JSON.stringify(
      musicData
    )} Summarize their taste and roast them like you're their brutally honest friend like brutally fatality set to max in 50 words.`;

    const response = await openai.responses.create({
      model: "gpt-4o-mini",
      input: prompt,
    });

    res.json({ roast: response.output_text });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
