import React from 'react';
import * as ChatApiService from '../../interfaces/api/chat/index'
import {dataForFuzzySearch} from '../constants/index'
import useFuzzySearch from '../../hooks/useFuzySearch'

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

  const {search} = useFuzzySearch({list: dataForFuzzySearch, fuseOptions: {
    keys: ['title','indications', 'searchOptions'] 
  }})

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
   const d = search(message);
   console.log(d,'here is searched ');
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