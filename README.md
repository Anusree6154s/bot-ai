
# AI Chat with Feedback System

This is a ReactJS web application where users can chat with an AI model and provide feedback for each response. Users can also review past conversations and see all the feedback they've given across different sessions. The application also supports toggling between light and dark mode for improved accessibility.

## Getting Started
1. To access website hosted on internet, visit 
2. Follow the steps below to run the project on your local machine.

### Prerequisites
- Node.js and npm installed on your machine.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ai-chat-feedback.git
   cd ai-chat-feedback
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Run the application locally:
   ```bash
   npm start
   ```

4. Open your browser and go to:
   ```
   http://localhost:3000
   ```



## Technical Choices

### Libraries Used
- **ReactJS**: The primary framework for building the UI of the web application.
- **Material-UI (MUI)**: Chosen for its ready-to-use, consistent, and customizable UI components that help maintain a clean design.
- **React Context API**: Used for managing the global state of the application, particularly for theme switching and handling conversation history.
- **Vercel**: Deployed on Vercel for its seamless integration with React projects, fast performance, and easy setup.

## Design Choices

### User Interface & Experience
- **Chat UI**: The chat interface is designed to be clean and intuitive. Each AI response has a floating thumbs-up/down button that appears on hover to minimize clutter.
- **Feedback Collection**: Feedback is collected using a rating system for quantitative feedback and a text area for qualitative feedback.
- **Sidebar for Past Conversations**: The past conversations are listed in a collapsible sidebar for easy navigation and quick access, providing a more organized way to manage multiple conversations.
- **Light and Dark Mode**: Added to enhance user experience by allowing them to toggle between light and dark themes based on their preference.

### Visual Consistency
- Material-UI components ensure that the UI remains visually consistent and responsive across different devices.

## Trade-offs

### Limitations
- **Time Constraints**: Due to limited development time, some advanced features like saving data to a backend database were not implemented.
- **Minimal Animations**: Although basic transitions were added, more sophisticated animations could be included with additional time.

## Future Enhancements
- **Backend Integration**: Add API calls to store and fetch conversation history from a backend database.
- **Real-time AI Interaction**: Use an API service like OpenAI to handle real-time AI interactions instead of mock responses.
- **Authentication**: Implement user authentication for a more personalized experience.
- **Enhanced Animations**: Add more fluid animations to improve the user experience during interactions.
 - **Jest Testing** :Implement Jest testing to ensure robust functionality and error-free code.
