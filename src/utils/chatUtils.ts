
// This file simulates a chat API response
import { MessageType } from "@/types/MessageType";

// Sample responses for common customer inquiries
const responses: Record<string, string[]> = {
  default: [
    "I'm here to help! How can I assist you today?",
    "I don't have information on that specific topic yet. Can you provide more details or ask something else?",
    "Thank you for your question. Let me find the best answer for you.",
    "I'm sorry, I don't understand. Could you rephrase your question?",
  ],
  greeting: [
    "Hello! How can I help you today?",
    "Hi there! What can I assist you with?",
    "Welcome! How may I help you?",
    "Greetings! What brings you here today?",
  ],
  pricing: [
    "Our pricing plans start at $9.99/month for the Basic plan, $19.99/month for Premium, and $29.99/month for Enterprise. Each plan offers different features. Would you like me to explain the differences?",
    "We offer several pricing tiers to suit your needs. The Basic plan is $9.99/month, Premium is $19.99/month, and Enterprise is $29.99/month. Would you like more details about what each plan includes?",
  ],
  account: [
    "To create an account, click on the 'Sign Up' button at the top right corner of our website. You'll need to provide your email address and create a password.",
    "If you're having issues with your account, please try resetting your password first. If that doesn't work, our support team can help you recover your account.",
  ],
  features: [
    "Our product includes features such as automated reporting, data analytics, custom dashboards, and team collaboration tools. Which specific feature would you like to know more about?",
    "Key features include real-time analytics, unlimited users, custom integrations, and 24/7 support. Is there a particular feature you're interested in?",
  ],
  support: [
    "Our support team is available 24/7. You can reach us via email at support@example.com or through live chat during business hours.",
    "For immediate assistance, please use our live chat feature. For less urgent matters, you can email us at support@example.com and we'll get back to you within 24 hours.",
  ],
  refund: [
    "We offer a 30-day money-back guarantee. If you're not satisfied with our service, you can request a refund within 30 days of your purchase.",
    "Our refund policy allows for full refunds within 30 days of purchase. Please contact our support team to process your refund request.",
  ],
  technical: [
    "I'm sorry you're experiencing technical difficulties. Could you please provide more details about the issue? This will help me troubleshoot more effectively.",
    "For technical issues, I recommend clearing your browser cache and cookies first. If the problem persists, please let me know what specific error messages you're seeing.",
  ],
  thanks: [
    "You're welcome! Is there anything else I can help you with?",
    "Happy to help! If you have any other questions, feel free to ask.",
    "My pleasure! Is there anything else you'd like to know?",
  ],
  bye: [
    "Thank you for chatting with us today. Have a great day!",
    "Goodbye! Feel free to come back if you have more questions.",
    "Take care! Don't hesitate to reach out if you need further assistance.",
  ],
};

// Function to determine the response type based on user input
const getResponseType = (message: string): string => {
  message = message.toLowerCase();
  
  if (/hello|hi|hey|greetings/i.test(message)) {
    return "greeting";
  } else if (/bye|goodbye|see you|talk later/i.test(message)) {
    return "bye";
  } else if (/thank|thanks/i.test(message)) {
    return "thanks";
  } else if (/price|pricing|cost|subscription|plan/i.test(message)) {
    return "pricing";
  } else if (/account|login|sign up|register|password/i.test(message)) {
    return "account";
  } else if (/feature|functionality|can it|does it/i.test(message)) {
    return "features";
  } else if (/help|support|assist|contact/i.test(message)) {
    return "support";
  } else if (/refund|money back|cancel|return/i.test(message)) {
    return "refund";
  } else if (/error|bug|issue|problem|not working/i.test(message)) {
    return "technical";
  }
  
  return "default";
};

// Function to get a random response from the appropriate category
const getRandomResponse = (type: string): string => {
  const responseArray = responses[type] || responses.default;
  const randomIndex = Math.floor(Math.random() * responseArray.length);
  return responseArray[randomIndex];
};

// Simulate a delay for realistic bot response
export const getBotResponse = (userMessage: string): Promise<MessageType> => {
  return new Promise((resolve) => {
    const responseType = getResponseType(userMessage);
    const responseText = getRandomResponse(responseType);
    
    // Simulate thinking time (between 1-3 seconds)
    const thinkTime = 1000 + Math.random() * 2000;
    
    setTimeout(() => {
      resolve({
        id: Date.now().toString(),
        content: responseText,
        sender: "bot",
        timestamp: new Date(),
      });
    }, thinkTime);
  });
};
