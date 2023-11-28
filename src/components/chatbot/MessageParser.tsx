import React from 'react';
import * as ChatApiService from '../../interfaces/api/chat/index'

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

  const [showOptions, setShowOptions] = React.useState<boolean>(true)

  const handleApiResponse = (msg: string) => {
    ChatApiService.service({msg }).then(({data})=>{
      actions.handleTextResponse({text: data.response });
      console.log(data,' test tste');
      if(data.response.includes("What dental problems are you experiencing?") && showOptions){
        actions.handleOptions();
      }else{
        setShowOptions(true);
      }
    }).catch((e)=>{
      console.log(e,'test')
    })
  };

  const parse = (message:any) => {
    handleApiResponse(message);
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