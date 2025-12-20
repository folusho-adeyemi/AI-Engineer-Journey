import { useState } from 'react'
import './App.css'
import OpenAI from 'openai'

function App() {
  // State management
  const [messages, setMessages] = useState([])
  const [selectedLanguage, setSelectedLanguage] = useState('')
  const [inputText, setInputText] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // Available languages for translation
  const languages = [
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'it', name: 'Italian' },
    { code: 'pt', name: 'Portuguese' },
    { code: 'ja', name: 'Japanese' },
    { code: 'ko', name: 'Korean' },
    { code: 'zh', name: 'Chinese' },
    { code: 'ar', name: 'Arabic' },
    { code: 'ru', name: 'Russian' },
  ]

  // Handle language selection
  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value)
  }

  // Handle input text change
  const handleInputChange = (e) => {
    setInputText(e.target.value)
  }

  // Handle form submission / translation
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validation
    if (!inputText.trim()) {
      return
    }
    
    if (!selectedLanguage) {
      // Show error message - language must be selected
      alert('Please select a language')
      return
    }

    // Add user message to chat
    const userMessage = {
      id: Date.now(),
      type: 'user',
      text: inputText,
      language: 'English'
    }
    setMessages(prev => [...prev, userMessage])
    
    // Clear input
    setInputText('')
    setIsLoading(true)

    try {
      // Implement translation API call here
      const openai = new OpenAI({
        apiKey: import.meta.env.VITE_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true, // Required for browser usage
      })
      
      const targetLanguageName = languages.find(lang => lang.code === selectedLanguage)?.name || selectedLanguage
      
      const response = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: `You are a professional translator. Translate the user's English text to ${targetLanguageName}. Only provide the correcttranslation, you can deduce what a user is trying to translate, no additional commentary.`
          },
          {
            role: 'user',
            content: `Translate this English text to ${targetLanguageName}: "${inputText}"`
          }
        ],
        temperature: 0.7,
      })
      const translatedText = response.choices[0].message.content
      
      // Add AI response to chat
      const aiMessage = {
        id: Date.now() + 1,
        type: 'ai',
        originalText: inputText,
        translatedText: translatedText,
        language: languages.find(lang => lang.code === selectedLanguage)?.name || selectedLanguage
      }
      
      setMessages(prev => [...prev, aiMessage])
    } catch (error) {
      // Handle error - show error message to user  
      console.error('Translation error:', error)
      alert(`Translation error: ${error.message || 'Failed to translate. Please check your API key and try again.'}`)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>AI Language Interpreter</h1>
        <p>Translate your English text to any language</p>
      </header>

      <div className="chat-container">
        {/* Language Selector */}
        <div className="language-selector">
          <label htmlFor="language-select">Select Target Language:</label>
          <select 
            id="language-select"
            value={selectedLanguage}
            onChange={handleLanguageChange}
            className="language-dropdown"
          >
            <option value="">Choose a language...</option>
            {languages.map(lang => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>

        {/* Chat Messages Area */}
        <div className="chat-messages">
          {messages.length === 0 ? (
            <div className="empty-state">
              <p>Start a conversation by typing in English and selecting a language!</p>
            </div>
          ) : (
            messages.map(message => (
              <div key={message.id} className={`message ${message.type}`}>
                {message.type === 'user' ? (
                  <div className="message-content">
                    <div className="message-header">You (English)</div>
                    <div className="message-text">{message.text}</div>
                  </div>
                ) : (
                  <div className="message-content">
                    <div className="message-header">Translation ({message.language})</div>
                    <div className="message-text">{message.translatedText}</div>
                    <div className="message-original">Original: {message.originalText}</div>
                  </div>
                )}
              </div>
            ))
          )}
          
          {isLoading && (
            <div className="message ai loading">
              <div className="message-content">
                <div className="loading-indicator">Translating...</div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <form onSubmit={handleSubmit} className="chat-input-form">
          <div className="input-container">
            <input
              type="text"
              value={inputText}
              onChange={handleInputChange}
              placeholder="Type your message in English..."
              className="chat-input"
              disabled={isLoading}
            />
            <button 
              type="submit" 
              className="send-button"
              disabled={isLoading || !inputText.trim() || !selectedLanguage}
            >
              {isLoading ? 'Translating...' : 'Send'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App