# ABISC Bank AI Chatbot

An AI-powered customer support chatbot for ABISC Bank, built with Node.js and Claude's API. Customers can ask questions about the bank's products and services and get instant, accurate responses from Abby — ABISC Bank's virtual assistant.

## Live Demo

🔗 https://absic-bank-chat-bot.vercel.app

## What it does
- Answers customer questions about ABISC Bank's products and services
- Maintains conversation history so it remembers context throughout the chat
- Stays on topic — only responds to banking related queries
- Falls back gracefully — directs customers to call or visit a branch if it can't help

## Tech Stack
- **Backend:** Node.js, Express.js
- **AI:** Anthropic Claude API (claude-sonnet-4-5)
- **Frontend:** HTML, CSS, vanilla JavaScript


## Key Concepts Demonstrated
Large Language Model (LLM) Integration
Prompt Engineering
Conversational AI
Context Management
REST API Development
Backend Architecture
Customer Support Automation
Secure Environment Variable Management

## Running Locally
1. Clone the Repository
git clone https://github.com/Haancer/abisc-bank-chatbot.git
cd abisc-bank-chatbot
2. Install Dependencies
npm install
3. Configure Environment Variables

Create a .env file in the project root and add:

ANTHROPIC_API_KEY=your_api_key_here
4. Start the Application
node index.js
5. Open in Browser
http://localhost:3000