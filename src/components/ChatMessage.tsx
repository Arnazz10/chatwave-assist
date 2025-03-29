
import React from "react";
import { MessageType } from "@/types/MessageType";
import { cn } from "@/lib/utils";
import { Avatar } from "@/components/ui/avatar";
import { BotIcon, User } from "lucide-react";

interface ChatMessageProps {
  message: MessageType;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isBot = message.sender === "bot";
  
  return (
    <div
      className={cn(
        "flex w-full mb-4",
        isBot ? "justify-start" : "justify-end"
      )}
    >
      {isBot && (
        <div className="mr-2 flex-shrink-0">
          <Avatar className="h-8 w-8 bg-chatbot-primary text-white">
            <BotIcon className="h-5 w-5" />
          </Avatar>
        </div>
      )}
      <div
        className={cn(
          "px-4 py-2 rounded-lg max-w-[80%]",
          isBot
            ? "bg-chatbot-bot text-white rounded-tl-none"
            : "bg-chatbot-user text-gray-800 rounded-tr-none"
        )}
      >
        <p className="text-sm">{message.content}</p>
        <span className="text-xs opacity-70 block mt-1">
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
      {!isBot && (
        <div className="ml-2 flex-shrink-0">
          <Avatar className="h-8 w-8 bg-gray-300">
            <User className="h-5 w-5" />
          </Avatar>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
