import React from 'react';

interface IProps {
    createChatBotMessage:any,
    setState:any
    children: any
    actions: any
}

const ActionProvider: React.FC<IProps> = ({ createChatBotMessage, setState,actions, children }) => {
  
  const [details, setDetails] = React.useState<any>(null)
  const [askedName, setAskedName] = React.useState<any>(false)
  const [askedEmail, setAskedEmail] = React.useState<any>(false)

  const parse = (message:any) => {
    if ((message||"").toLowerCase().includes('hello')) {
      actions.handleHello();
      if(details?.name && details?.mobile){
        actions.handleOptions();
      }
    }else if ((message||"").toLowerCase().includes('dog')) {
      actions.handleDog();
      if(details?.name && details?.mobile){
        actions.handleOptions();
      }
    }else if((message||"").toLowerCase().includes('help') || (message||"").toLowerCase().includes('support')){
      if(details?.name && details?.mobile){
        actions.handleOptions();
      }
    } 
    if(!details?.name){
      if(askedName){
        setDetails((p:any) => ({...p, name: message}));
        console.log(message,'message');
        setAskedName(false);
        actions.handleTextResponse({text: `Hello ${message}, please tell me your mobile number.`})
        setAskedEmail(true);
      }else{
        setAskedName(true);
        actions.handleTextResponse({text: 'Before we begin, please tell me your name.'});
      }
    }else if(!details?.mobile){
      if(askedEmail){
        setDetails((p:any) => ({...p, mobile: message}));
        console.log(message,'message');
        setAskedEmail(false);
        actions.handleTextResponse({text: 'Thank for sharing your details.'});
        actions.handleOptions();
      }else{
        setAskedEmail(true);
        actions.handleTextResponse({text: `Hello ${details?.name}, please tell me your mobile number.`})
      }
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