
import React from "react";
import { Avatar } from "@/components/ui/avatar";
import { BotIcon } from "lucide-react";

const TypingIndicator = () => {
  return (
    <div className="flex items-center mb-4">
      <div className="mr-2">
        <Avatar className="h-8 w-8 bg-chatbot-primary text-white">
          <BotIcon className="h-5 w-5" />
        </Avatar>
      </div>
      <div className="bg-chatbot-bot text-white px-4 py-2 rounded-lg rounded-tl-none">
        <div className="flex space-x-1">
          <div className="w-2 h-2 rounded-full bg-white animate-pulse" style={{ animationDelay: "0ms" }}></div>
          <div className="w-2 h-2 rounded-full bg-white animate-pulse" style={{ animationDelay: "300ms" }}></div>
          <div className="w-2 h-2 rounded-full bg-white animate-pulse" style={{ animationDelay: "600ms" }}></div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
