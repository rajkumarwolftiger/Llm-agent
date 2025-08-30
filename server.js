import express from "express";
import dotenv from "dotenv";
import fetch from "node-fetch";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public"))); // serve static files

// ✅ AIpipe chat endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;
    const apiKey = process.env.AIPIPE_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: "❌ Missing AIPIPE_KEY in .env" });
    }

    const response = await fetch("https://aipipe.org/openrouter/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "openai/gpt-4.1-mini", // you can change model here
        messages: messages || [{ role: "user", content: "Hello AI!" }]
      })
    });

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("❌ AIpipe API error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ Fallback route → serve index.html
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
