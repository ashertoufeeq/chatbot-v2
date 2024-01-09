import React from 'react';
import * as ChatApiService from '../../interfaces/api/chat/index'
// import {dataForFuzzySearch} from '../constants/index'
// import useFuzzySearch from '../../hooks/useFuzySearch'

interface IProps {
    createChatBotMessage:any,
    setState:any
    children: any
    actions: any
}

const ActionProvider: React.FC<IProps> = ({ createChatBotMessage, setState,actions, children }) => {
  

  const [firstMsg, setFirstMsg] = React.useState(true)
  const [showOptions, setShowOptions] = React.useState<boolean>(true)
  const [optionHandled, setOptionHandled] = React.useState<boolean>(false)

  const handleApiResponse = (msg: string) => {
    const t = actions.startLoading()
    ChatApiService.service({msg: firstMsg?'hello': msg }).then(({data})=>{
      actions.handleTextResponse({text: data.response });
      if(data.response.includes("What dental problems are you experiencing?") && showOptions){
        actions.handleOptions();
        setOptionHandled(true);
      }else{
        setFirstMsg(false);
        setShowOptions(true);
      }
      actions.stopLoading(t)
    }).catch((e)=>{
      console.log(e,'test')
    })
  };

  const parse = (message:any) => {
    if(!optionHandled){
      handleApiResponse(message);
    }else{
      actions.handleSuggestionsOnText({searchKey: message})
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