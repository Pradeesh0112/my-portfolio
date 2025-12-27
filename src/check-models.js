// check-models.js
const { GoogleGenerativeAI } = require("@google/generative-ai");

// ⚠️ TEMP: Paste key only for testing, remove later
const apiKey = "PASTE_YOUR_GEMINI_KEY_HERE";

const genAI = new GoogleGenerativeAI(apiKey);

async function testModels() {
  const models = [
    "gemini-1.5-flash",
    "gemini-1.5-flash-001",
    "gemini-1.5-pro",
    "gemini-pro",
    "gemini-1.0-pro",
  ];

  for (const name of models) {
    process.stdout.write(`Testing ${name}... `);
    try {
      const model = genAI.getGenerativeModel({ model: name });
      await model.generateContent("Hello");
      console.log("✅ AVAILABLE");
    } catch (err) {
      console.log("❌ NOT AVAILABLE");
    }
  }
}

testModels();
