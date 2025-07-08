# PrepKit 🚀
*Your AI-Powered Interview Preparation Companion*

## 🎯 Project Overview

PrepKit is a comprehensive, full-stack interview preparation application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and powered by Google's Gemini API. This intelligent platform revolutionizes how candidates prepare for technical interviews by generating personalized questions, providing AI-driven explanations, and creating an interactive learning environment.

## ✨ Key Features

### 🔐 **User Authentication**
- Secure JWT-based authentication system
- User registration and login functionality
- Protected routes and session management

### 🎭 **Role-Based Interview Sessions**
- Generate customized questions based on specific job roles
- Adaptive content based on experience level (Junior, Mid-level, Senior)
- Industry-specific question pools

### 🤖 **AI-Powered Q&A Generation**
- Leverage Gemini API for intelligent question creation
- High-quality technical questions with detailed answers
- Context-aware question generation

### 🎪 **Accordion Learning UI**
- Clean, expandable interface for studying
- Smooth animations and intuitive navigation
- Distraction-free learning experience

### 💡 **Dynamic AI Explanations**
- On-demand concept breakdowns
- Complex topic simplification
- Interactive learning assistance

### 📌 **Smart Question Management**
- Pin important questions for quick access
- Organize study materials efficiently
- Bookmark challenging topics

### 💾 **Persistent Data Storage**
- MongoDB integration for session management
- Save progress and resume later
- Question history and performance tracking

### 🎨 **Modern UI/UX**
- Responsive design with Tailwind CSS
- Clean, professional interface
- Smooth user experience across devices

## 🛠️ Technology Stack

### Frontend
- **React.js** - Component-based UI library
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### AI Integration
- **Google Gemini API** - Advanced AI for question generation
- **Natural Language Processing** - Intelligent content creation

### Authentication & Security
- **JWT (JSON Web Tokens)** - Secure authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- Google Gemini API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/RahulKumar2340029/prepkit.git
   cd prepkit
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Configuration**
   
   Create a `.env` file in the backend directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/prepkit
   JWT_SECRET=your_jwt_secret_key
   GEMINI_API_KEY=your_gemini_api_key
   ```

5. **Start the application**
   
   Backend server:
   ```bash
   cd backend
   npm run dev
   ```
   
   Frontend development server:
   ```bash
   cd frontend
   npm start
   ```

## 📱 Application Flow

1. **User Registration/Login** - Secure authentication system
2. **Dashboard** - Overview of recent sessions and progress
3. **Session Creation** - Select role, experience level, and topic focus
4. **Interview Practice** - AI-generated questions with expandable answers
5. **Note Taking** - Save important insights and explanations
6. **Review Mode** - Revisit pinned questions and saved sessions

## 🎯 Core Components

### Authentication System
- User registration with email validation
- Secure login with JWT tokens
- Password encryption and security

### Question Generation Engine
- Role-specific question algorithms
- Experience-level adaptation
- Real-time AI integration

### Learning Interface
- Accordion-style Q&A display
- Progressive disclosure of information
- Interactive explanation requests

### Data Management
- Session persistence
- User progress tracking
- Question categorization

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile

### Sessions
- `POST /api/sessions` - Create new session
- `GET /api/sessions` - Get user sessions
- `PUT /api/sessions/:id` - Update session
- `DELETE /api/sessions/:id` - Delete session

### Questions
- `POST /api/questions/generate` - Generate AI questions
- `GET /api/questions/:sessionId` - Get session questions
- `PUT /api/questions/:id/pin` - Pin/unpin question

## 🎨 UI Components

### Dashboard
- Session overview cards
- Progress statistics
- Quick action buttons

### Question Interface
- Expandable Q&A accordion
- Pin functionality
- AI explanation buttons

### Navigation
- Responsive sidebar
- Breadcrumb navigation
- User profile dropdown

## 🔮 Future Enhancements

- **Video Interview Simulation** - Practice with AI-powered mock interviews
- **Performance Analytics** - Detailed progress tracking and insights
- **Collaborative Features** - Share sessions with mentors or peers
- **Mobile Application** - Native iOS and Android apps
- **Advanced AI Features** - Personalized learning paths and recommendations

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🎯 Support

For support and questions:
- Create an issue on GitHub
- Email: karnrahul2001@outlook.com
- Documentation: [docs.prepkit.com](https://docs.prepkit.com)

## 🌟 Acknowledgments

- Google Gemini API for AI capabilities
- MongoDB for reliable data storage
- React community for excellent documentation
- Tailwind CSS for beautiful styling

---

**Get the complete source code and support the project:** [Buy Me a Coffee](https://buymeacoffee.com/timetoprogra)

*Built with ❤️ by developers, for developers*
