
import { useEffect, useState } from 'react';
import RenderSuggestion from './renderSuggestions';
import * as QuestionChat  from '../../../interfaces/api/chat/questions'
import { doctorsTitle } from '../../constants';

const SuggestionsOnText = (props: {searchKey: string, filteredData: Record<string,any>, actionProvider: any,payload: Record<string, any>}) => {
    const [suggestions, setSuggestions] = useState<Array<{name: string, url: string, color?: string,handle: ()=> void}>>([])
    const [includeDoctor, setIncludeDoctor] = useState<boolean>(false)
    const [fetching,setFetching] = useState<boolean>(false)
    const [answer, setAnswer] = useState<string | null>('');


    useEffect(()=>{
      console.log('called 2',props?.payload?.searchKey );
      setFetching(true);
      QuestionChat.service({msg: props?.payload?.searchKey }).then(({data}:any)=>{
            setAnswer(data.answer);
            setFetching(false);
          }).catch((e:any)=>{
            console.log(e,'test');
            setFetching(false);
          })
        setSuggestions((props?.payload?.filteredData || []).map((item:any)=>{
            if(doctorsTitle.includes(item.title)){
              setIncludeDoctor(true); 
            }
            return {
                name: item.title,
                url: item.url,
                businessTimings: item.businessTimings,
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

    return <>{(suggestions || [])?.length>0? <RenderSuggestion fetching={fetching} text={includeDoctor?'':answer} suggestions={suggestions} {...props} />:<div>
        Opps! I am unable to find anything.
        </div>}</>;
};    

export default SuggestionsOnText;