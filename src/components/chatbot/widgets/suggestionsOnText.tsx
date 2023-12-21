
import { useEffect, useState } from 'react';
import RenderSuggestion from './renderSuggestions';
import * as QuestionChat  from '../../../interfaces/api/chat/questions'

const SuggestionsOnText = (props: {searchKey: string, filteredData: Record<string,any>, actionProvider: any,payload: Record<string, any>}) => {
    const [suggestions, setSuggestions] = useState<Array<{name: string, url: string, color?: string,handle: ()=> void}>>([])
    const [answer, setAnswer] = useState<string | null>('');

    useEffect(()=>{
        QuestionChat.service({msg: props?.payload?.searchKey }).then(({data}:any)=>{
            setAnswer(data.answer);
          }).catch((e:any)=>{
            console.log(e,'test');
          })
        setSuggestions((props?.payload?.filteredData || []).map((item:any)=>{
            return {
                name: item.title,
                url: item.url,
                handle: ()=> {
                    props?.actionProvider.handleTextResponse(
                    {
                      text:"Thank You! Type 'hello' to restart chat",
                      userMessage: item.title
                    });
                    props?.actionProvider.handleContactUs()
                },
             };
        }));
    },[])

    return <>{(suggestions || [])?.length>0? <RenderSuggestion text={answer} suggestions={suggestions} {...props} />:<div>
        Opps! I am unable to find anything.
        </div>}</>;
};    

export default SuggestionsOnText;