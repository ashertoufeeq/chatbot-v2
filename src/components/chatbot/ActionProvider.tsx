import React from 'react';
import { botName } from './config';


interface IProps {
  createChatBotMessage:any,
  setState:any
  children: any
}

const ActionProvider: React.FC<IProps> = ({ createChatBotMessage, setState, children }) => {

  const addMessageToState = (botMessage:any, userMessage?: string) => {
    setState((prev:any) => {
    console.log(prev,'previous');
      return{
      ...prev,
      messages: [...prev.messages,  ...(userMessage?[{
        message: userMessage,
        "type": "user",
        id: Math.random()+ new Date().getTime()
    }]:[]),botMessage,],
  }})};

  const handleOptions = (options:any) => {
    const message = createChatBotMessage(
      "How can I help you? Below are some possible options.",
      {
        widget: "overview",
        loading: true,
        terminateLoading: true,
        ...options
      }
    );

    addMessageToState(message);
  };

  const handleHello = () => {
    const botMessage = createChatBotMessage(`you’ve reached Smile Zone, the best place for your dental needs. I’m ${botName}, and I’m here to assist you. You can ask me anything about our services, prices, locations, or dentists. Or, you can simply book an appointment with one of our experts. How can I help you?`);
    addMessageToState(botMessage)
  };
  
  const handleTextResponse = ({text, userMessage}:{text:string, userMessage?: string}) => {
    const botMessage = createChatBotMessage(text);
    addMessageToState(botMessage, userMessage)
  };

  
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {handleHello, handleOptions, handleTextResponse},
        });
      })}
    </div>
  );
};

export default ActionProvider;