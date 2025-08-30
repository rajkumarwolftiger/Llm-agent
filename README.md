# 🤖 Alpipe LLM Agent (POC)

This project is a **browser-based LLM Agent Proof-of-Concept (POC)** that demonstrates how modern LLMs (via [Alpipe](https://aipipe.org)) can be used to perform **multi-tool reasoning**.  
The agent accepts user input, processes it using an LLM backend, and returns contextual answers — combining reasoning, calculations, and even interview-style guidance.

---

## 🚀 Features
- Browser-based chatbot UI with live conversation
- Connects to **Alpipe API** using your API key
- Supports contextual reasoning (math, Q&A, interview prep, etc.)
- Simple **Node.js + Express** backend for serving requests
- Lightweight frontend with chat interface

---

## 🛠️ Tech Stack
- **Frontend:** HTML, CSS, Vanilla JS
- **Backend:** Node.js + Express
- **LLM Provider:** [Alpipe.org](https://aipipe.org)
- **Environment Config:** `.env` file for storing your `AIPIPE_KEY`

---

## 📂 Project Structure
# 🤖 Alpipe LLM Agent (POC)

This project is a **browser-based LLM Agent Proof-of-Concept (POC)** that demonstrates how modern LLMs (via [Alpipe](https://aipipe.org)) can be used to perform **multi-tool reasoning**.  
The agent accepts user input, processes it using an LLM backend, and returns contextual answers — combining reasoning, calculations, and even interview-style guidance.

---

## 🚀 Features
- Browser-based chatbot UI with live conversation
- Connects to **Alpipe API** using your API key
- Supports contextual reasoning (math, Q&A, interview prep, etc.)
- Simple **Node.js + Express** backend for serving requests
- Lightweight frontend with chat interface

---

## 🛠️ Tech Stack
- **Frontend:** HTML, CSS, Vanilla JS
- **Backend:** Node.js + Express
- **LLM Provider:** [Alpipe.org](https://aipipe.org)
- **Environment Config:** `.env` file for storing your `AIPIPE_KEY`

---

## 📂 Project Structure
llm-agent-poc/
├── public/ # Frontend (index.html, styles.css, script.js)
├── server.js # Express backend
├── package.json # Dependencies + scripts
├── .env.example # Example environment variables
├── README.md # Documentation
└── LICENSE # MIT License


---

## ⚡ Getting Started

### 1. Clone the Repo
```bash
git clone https://github.com/your-username/llm-agent-poc.git
cd llm-agent-poc

##Install Dependencies
'''bash
npm install

---

##Setup Environment Variables

Create a .env file:

'''bash
AIPIPE_KEY=your_api_key_here

---

##Start the Server
'''bash
npm start

The app will run at 👉 http://localhost:3000
