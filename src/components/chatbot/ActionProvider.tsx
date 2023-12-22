import React from 'react';
import { botName } from './config';
import {dataForFuzzySearch } from '../constants/index'
import useFuzzySearch  from '../../hooks/useFuzySearch'
import { message } from 'antd';


interface IProps {
  createChatBotMessage:any,
  setState:any
  children: any
}

const ActionProvider: React.FC<IProps> = ({ createChatBotMessage, setState, children }) => {
  const {search} = useFuzzySearch({list: dataForFuzzySearch})

  const addMessageToState = (botMessage:any, userMessage?: string) => {
    setState((prev:any) => {
      return{
      ...prev,
      messages: [...prev.messages,  ...(userMessage?[{
        message: userMessage,
        "type": "user",
        id: Math.random()+ new Date().getTime()
    }]:[]),botMessage,],
  }})};


  const startLoading = (options:any) => {
    const message = createChatBotMessage(
      "loading...",
      {
        loading: true,
        terminateLoading: false,
        ...options
      }
    );
    addMessageToState(message);
    console.log(message,'message');
    return message.id
  };

  const stopLoading = (id:string) => {
    setState((p:any) => ({
      ...p,
      messages: (p?.messages || []).filter((item:any) => item.id !== id)
    }))
  };


  const handleOptions = (options:any) => {
    const message = createChatBotMessage(
      "How can I help you? Please make a selection from menu or enter keyword.",
      {
        widget: "overview",
        loading: true,
        terminateLoading: true,
        ...options
      }
    );

    addMessageToState(message);
  };

  const handleSuggestions = (props:any) => {
    const message = createChatBotMessage(
      "Please make a selection from menu or enter keyword.",
      {
        widget: "suggestions",
        loading: true,
        terminateLoading: true,
        payload: {...props}
      }
    );
    addMessageToState(message, props.suggestionKey);
  }

  const handleContactUs = (props:any) => {
    const message = createChatBotMessage(
      "Want to get in touch with us directly?",
      {
        widget: "contactUs",
        loading: true,
        terminateLoading: true,
        payload: {...props}
      }
    );
    addMessageToState(message);
  }

  /*

  ChatApiService.service({msg }).then(({data})=>{
      actions.handleTextResponse({text: data.response });
      if(data.response.includes("What dental problems are you experiencing?") && showOptions){
        actions.handleOptions();
        setOptionHandled(true);
      }else{
        setShowOptions(true);
      }
    }).catch((e)=>{
      console.log(e,'test')
    })

  */

  const handleSuggestionsOnText = (props:any) => {
    const filteredData = search(props?.searchKey);
    if(filteredData.length>0){
      const message = createChatBotMessage(
        `please make a selection from menu or enter keyword.`,
          {
            widget: "suggestionsOnText",
            loading: true,
            terminateLoading: true,
            payload: {...props, filteredData}
          }
        );
        addMessageToState(message);
    }else{
      const message = createChatBotMessage(
        "How can I help you? Please make a selection from menu or enter keyword.",
        {
          widget: "overview",
          loading: true,
          terminateLoading: true,
        }
      );
  
      addMessageToState(message);
    }
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
          actions: {handleHello, handleOptions,startLoading, stopLoading, handleTextResponse, handleSuggestions, handleSuggestionsOnText, handleContactUs },
        });
      })}
    </div>
  );
};

export default ActionProvider;