
import { useEffect, useState } from 'react';
import RenderSuggestion from './renderSuggestions';

const SuggestionsOnText = (props: {searchKey: string, filteredData: Record<string,any>, actionProvider: any,payload: Record<string, any>}) => {
    const [suggestions, setSuggestions] = useState<Array<{name: string, url: string, color?: string,handle: ()=> void}>>([])

    useEffect(()=>{
        setSuggestions((props?.payload?.filteredData || []).map((item:any)=>{
            return {
                name: item.title,
                url: item.url,
                handle: ()=> {
                    
                    props?.actionProvider.handleTextResponse(
                    {
                      text:"Thank You! Type 'hello' to restart chat",
                      userMessage: item.title
                    }
                    );
                },
             };
        }));
    },[])

    return <>{(suggestions || [])?.length>0? <RenderSuggestion suggestions={suggestions} {...props} />:<div>
        Opps! I am unable to find anything.
        </div>}</>;
};    

export default SuggestionsOnText;