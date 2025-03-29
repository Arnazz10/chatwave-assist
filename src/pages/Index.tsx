
import React from "react";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 px-4">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-2 text-chatbot-primary">AI Customer Support</h1>
        <p className="text-center text-gray-600 mb-8">Get instant help with your questions</p>
        
        <div className="max-w-md mx-auto">
          <ChatBot />
        </div>
        
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>This is a demonstration of an AI customer support chatbot.</p>
          <p>Try asking about pricing, features, account issues, or technical support.</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
