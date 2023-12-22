import RenderSuggestion from './renderSuggestions';
import {data } from '../../constants/index'
import { useEffect, useState } from 'react';
import * as QuestionChat  from '../../../interfaces/api/chat/questions'

const Suggestions = (props: {suggestionKey: string, actionProvider: any,payload: Record<string, any>}) => {
    const optionObject = data[props?.payload?.suggestionKey];
    const suggestions: Array<{name: string, url: string, color?: string,handle: ()=> void}> = [];
    const [answer, setAnswer] = useState<string | null>('');

    useEffect(()=>{
        QuestionChat.service({msg: props?.payload?.suggestionKey }).then(({data}:any)=>{
            setAnswer(data.answer);
          }).catch((e:any)=>{
            console.log(e,'test');
          })
    },[])

    Object.keys(optionObject || {}).map((key)=>{
        suggestions.push({
            name: key,
            url: optionObject[key],
            handle: ()=> {props.actionProvider.handleTextResponse(
                {
                  text:"Thank You! Type 'hello' to restart chat",
                  userMessage: key
                });
                props?.actionProvider.handleContactUs();
            },
         });
        return null;
    })

    return <RenderSuggestion suggestions={suggestions} text={answer} {...props} />;
};    

export default Suggestions;