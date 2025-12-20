# AI Language Interpreter

An interactive, chat-style web application that translates English text to multiple languages using OpenAI's GPT-4o-mini model. Built with React and Vite for a modern, responsive user experience.

![AI Language Interpreter Screenshot](screenshot.png)

## 🌟 Features

- **Chat-style Interface**: Clean, modern chat UI that displays your English messages and their translations side-by-side
- **Multi-language Support**: Translate to 10+ languages including Spanish, French, German, Italian, Portuguese, Japanese, Korean, Chinese, Arabic, and Russian
- **Real-time Translation**: Powered by OpenAI's GPT-4o-mini for accurate, context-aware translations
- **Smart Translation**: The AI can deduce what you're trying to translate even if the input isn't perfect
- **Message History**: View your translation history in a scrollable chat interface
- **Loading States**: Visual feedback during translation processing
- **Error Handling**: User-friendly error messages for API issues

## 🚀 Getting Started

### Prerequisites

- Node.js version 20.19+ or 22.12+ (required for Vite)
- npm or yarn package manager
- OpenAI API key ([Get one here](https://platform.openai.com/api-keys))

### Installation

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <repository-url>
   cd InterpreterAI/ai-interpreter-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   
   Create a `.env` file in the root of the `ai-interpreter-app` directory:
   ```bash
   touch .env
   ```
   
   Add your OpenAI API key to the `.env` file:
   ```
   VITE_OPENAI_API_KEY=your_openai_api_key_here
   ```
   
   **Important**: The variable name must start with `VITE_` for Vite to expose it to your application.

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**:
   
   Navigate to the URL shown in your terminal (usually `http://localhost:5173`)

## 📖 How to Use

1. **Select a Target Language**: 
   - Use the dropdown menu at the top to choose the language you want to translate to

2. **Type Your Message**:
   - Enter your English text in the input field at the bottom
   - The send button will be enabled once you've selected a language and entered text

3. **Get Translation**:
   - Click "Send" or press Enter
   - Your message will appear in the chat as "You (English)"
   - The translation will appear below as "Translation (Language Name)"
   - The original text is also displayed for reference

4. **Continue Translating**:
   - Keep adding messages to build a conversation history
   - Each translation is saved in the chat for easy reference

## 🛠️ Tech Stack

- **React 19** - Modern React with hooks for state management
- **Vite 7** - Fast build tool and dev server
- **OpenAI SDK** - GPT-4o-mini for intelligent translations
- **CSS3** - Custom styling for a beautiful chat interface

## 📁 Project Structure

```
ai-interpreter-app/
├── src/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Application styles
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── .env                 # Environment variables (create this)
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

## 🔧 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint

## ⚠️ Important Notes

- **API Key Security**: Never commit your `.env` file to version control. It's already included in `.gitignore`
- **Browser Usage**: This app uses `dangerouslyAllowBrowser: true` for development. In production, consider using a backend API to protect your API key
- **Environment Variables**: Vite requires the `VITE_` prefix for environment variables to be exposed to client-side code
- **Node.js Version**: Make sure you're using Node.js 20.19+ or 22.12+ to avoid Vite compatibility issues

## 🎯 Learning Outcomes

This project demonstrates:
- React hooks (useState) for state management
- Async/await for API calls
- Form handling and validation
- Error handling in React applications
- Environment variable management in Vite
- OpenAI API integration in a React application
- Modern CSS for chat-style UI design

## 🐛 Troubleshooting

**App won't load:**
- Ensure Node.js version is 20.19+ or 22.12+
- Check that your `.env` file exists and contains `VITE_OPENAI_API_KEY`
- Restart the dev server after creating/modifying `.env`

**Translation errors:**
- Verify your OpenAI API key is correct
- Check your OpenAI account has available credits
- Ensure you have internet connectivity

**Environment variables not working:**
- Make sure variable names start with `VITE_`
- Restart the dev server after changing `.env` file
- Don't use `dotenv` - Vite handles `.env` files automatically

## 📝 License

This project is part of my AI Engineer learning journey.

---

*Built with ❤️ as part of my journey into AI Engineering*
