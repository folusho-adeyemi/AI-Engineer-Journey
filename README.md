# AI-Engineer-Journey

Welcome to my journey into becoming an AI Engineer! This repository documents my learning path and projects as I explore the world of artificial intelligence, machine learning, and AI-powered applications.

## 🚀 Projects

### 1. OpenAI-API
**Description:** A foundational project exploring the OpenAI API with chat completions. This project demonstrates how to set up and use the OpenAI SDK in a Node.js environment to interact with GPT models.

**Features:**
- Basic chat completion implementation
- System and user message roles
- Environment variable configuration for API keys
- Uses GPT-5-mini model

**Tech Stack:**
- Node.js
- OpenAI SDK
- dotenv

**Location:** `/OpenAI-API`

---

### 2. AI-Safety
**Description:** An AI content moderation application that uses OpenAI's Moderation API to detect and flag inappropriate or harmful content. This project demonstrates the importance of content safety in AI applications.

**Features:**
- Content moderation using OpenAI's moderation endpoint
- User tracking for API usage monitoring
- Flagged content detection with category breakdown
- Warning rendering for flagged content

**Tech Stack:**
- JavaScript (ES6 Modules)
- OpenAI SDK
- HTML/CSS

**Location:** `/AI-Safety`

---

### 3. Dalle-e-images (ArtMatch)
**Description:** An interactive image generation application called "ArtMatch" that uses DALL-E 3 to create images from text descriptions. Users can describe famous paintings or any visual concept, and the app generates corresponding images.

**Features:**
- Text-to-image generation using DALL-E 3
- Base64 image encoding for direct display
- Customizable image size and style (vivid/natural)
- Interactive UI for prompt input

**Tech Stack:**
- JavaScript (ES6 Modules)
- OpenAI SDK (DALL-E 3)
- HTML/CSS

**Location:** `/Dalle-e-images`

---

### 4. Stock-Evaluator
**Description:** A comprehensive stock analysis application that fetches real stock data from Polygon.io API and uses GPT-4 to generate engaging, personality-driven trading reports. The app allows users to input multiple stock tickers and receive AI-generated investment recommendations.

**Features:**
- Multi-ticker stock data fetching from Polygon.io API
- GPT-4 powered analysis and report generation
- Customizable report style using few-shot examples
- Interactive UI with ticker management
- Loading states and error handling
- Date utility functions for stock data queries

**Tech Stack:**
- JavaScript (ES6 Modules)
- OpenAI SDK (GPT-4)
- Polygon.io Stock API
- HTML/CSS

**Location:** `/Stock-Evaluator`

---

### 5. AI Language Interpreter
**Description:** An interactive, chat-style web application that translates English text to multiple languages using OpenAI's GPT-4o-mini model. Built with React and Vite for a modern, responsive user experience.

**Features:**
- Chat-style interface with message history
- Multi-language support (10+ languages)
- Real-time translation using GPT-4o-mini
- Smart translation that can deduce user intent
- Loading states and error handling
- Modern, responsive UI design

**Tech Stack:**
- React 19
- Vite 7
- OpenAI SDK (GPT-4o-mini)
- CSS3

**Location:** `/InterpreterAI/ai-interpreter-app`

---

## 🛠️ Technologies Used

- **OpenAI API** - For chat completions, image generation, content moderation, and translations
- **Polygon.io API** - For real-time stock market data
- **React** - Modern UI library for building interactive web applications
- **Vite** - Fast build tool and development server
- **Node.js** - Runtime environment
- **JavaScript (ES6 Modules)** - Modern JavaScript with module support
- **HTML/CSS** - Frontend development

## 📦 Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   
   For Node.js projects (OpenAI-API, etc.), create a `.env` file:
   ```
   OPENAI_API_KEY=your_openai_api_key
   POLYGON_API_KEY=your_polygon_api_key
   ```
   
   For Vite/React projects (InterpreterAI), create a `.env` file with `VITE_` prefix:
   ```
   VITE_OPENAI_API_KEY=your_openai_api_key
   ```

## 🎯 Learning Objectives

Through these projects, I'm learning:
- How to integrate OpenAI APIs into applications
- Content moderation and AI safety practices
- Image generation with DALL-E
- Building interactive web applications with AI
- React and modern frontend development
- Vite build tool and environment variable management
- API integration and data handling
- Prompt engineering and few-shot learning
- Error handling and user experience design
- Translation and language processing with AI

## 📝 Notes

- All projects use ES6 modules
- Browser-based projects require opening HTML files in a browser (not running with Node.js)
- React projects (InterpreterAI) require Node.js 20.19+ or 22.12+ for Vite compatibility
- Some projects use `dangerouslyAllowBrowser: true` for development purposes
- Environment variables are required for API functionality
- Vite projects require `VITE_` prefix for environment variables to be exposed to client code

---

*This is an ongoing journey. More projects and learning experiences to come!*