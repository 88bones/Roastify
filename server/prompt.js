import OpenAI from "openai";
import express from "express";
require("dotenv").config();

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI,
});

router.post("/roast", async (req, res) => {
  try {
    const { musicData } = req.body;

    const prompt = `User listens to a lot ${JSON.stringify(
      musicData
    )} Summarize their taste and roast them like you're their brutally honest friend.`;

    const response = await openai.responses.create({
      model: "gpt-4o-mini",
      input: prompt,
    });

    res.json({ roast: response.output_text });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
