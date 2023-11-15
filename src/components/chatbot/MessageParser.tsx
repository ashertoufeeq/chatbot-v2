import React from 'react';

interface IProps {
    createChatBotMessage:any,
    setState:any
    children: any
    actions: any
}

const ActionProvider: React.FC<IProps> = ({ createChatBotMessage, setState,actions, children }) => {
  
  const parse = (message:any) => {
    if (message.includes('hello')) {
      actions.handleHello();
      actions.handleOptions();
    }

    if (message.includes('dog')) {
      actions.handleDog();
    }
    if(message.includes('help') || message.includes('support')){
      actions.handleOptions();
    }
  };
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default ActionProvider;