# Gemini AI Chat

Gemini is a frontend-focused AI chat application built with React that leverages Google Gemini (GenAI) API to provide real-time conversational responses. It is designed to simulate a modern AI assistant experience with an interactive, responsive, and user-friendly interface.

# Features

* Dynamic Prompt Interaction: Enter prompts in the input box or click pre-defined suggestion cards to receive instant AI-generated responses.

* Chat History: Stores recent prompts in a sidebar with clickable entries for easy access. Chat history is persisted across sessions using localStorage.

* New Chat & Clear History: Start a fresh conversation with the “New Chat” button or clear all past prompts with a single click.

* Streaming Response: Responses are displayed progressively, simulating a real-time AI typing experience.

* State Management: Uses React Context API and hooks (useState, useEffect, useContext) to manage prompts, responses, loading states, and chat history efficiently.

* Responsive UI: Designed with a clean layout suitable for both desktop and mobile devices.

* Safe & Secure API Usage: Integrates Google Gemini via an environment variable (VITE_GEMINI_API_KEY) to ensure API keys are never exposed in the frontend code.

# Tech Stack

* Frontend: React, Vite, CSS Modules

* State Management: React Context API & Hooks

* AI Integration: Google Gemini (GenAI) API

* Persistence: localStorage for chat history

* Deployment: Can be hosted on Netlify, Vercel, or any static site hosting