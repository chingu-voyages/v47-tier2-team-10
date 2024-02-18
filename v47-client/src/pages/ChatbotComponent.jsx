// Chatbot.js
import React from 'react';
import { Chatbot } from 'react-chatbot-kit';
import faqData from '../components/productpage/modals/faq/faqData';

const config = {
  botName: 'FAQ Bot',
  lang: 'en',
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#376B7E',
    },
  },
  initialMessages: [
    {
      role: 'system',
      content: 'Welcome to the FAQ Bot! How can I help you today?',
    },
  ],
};

const ChatbotComponent = () => {
  const messageParser = (message) => {
    // Implement your message parsing logic here if needed
    console.log('rerendering chatbot')
    return <div>Static content - Test</div>;
    
  };

  const actionProvider = () => {
    // Implement your custom actions here if needed
    return [];
  };

  return (
    <Chatbot
      config={config}
      messageParser={messageParser}
      actionProvider={actionProvider}
      data={faqData}
    >
    </Chatbot>
  );
};

export default ChatbotComponent;
