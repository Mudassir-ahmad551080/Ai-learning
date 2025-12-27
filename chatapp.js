import { OpenAI } from "openai";
import dotenv from "dotenv";
dotenv.config();

const client = new OpenAI({ apiKey: process.env.OPEN_API_KEY });

const context = [
  {
    role: "system",
    content: "Keep answers short and simple"
  }
];

async function askQuestion(question) {
  context.push({ role: "user", content: question });

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: context,   // 👈 pass the whole history
  });

  const answer = response.choices[0].message.content;
  context.push({ role: "assistant", content: answer });

  console.log(answer);
}

process.stdout.write("Ask your question: ");
process.stdin.on("data", (data) => {
  const question = data.toString().trim();
  if (question === "exit") {
    process.exit();
  } else {
    askQuestion(question);
  }
});
