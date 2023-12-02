import RenderSuggestion from './renderSuggestions';
import {data } from '../../constants/index'

const Suggestions = (props: {suggestionKey: string, actionProvider: any,payload: Record<string, any>}) => {
    const optionObject = data[props?.payload?.suggestionKey];
    const suggestions: Array<{name: string, url: string, color?: string,handle: ()=> void}> = [];
    
    Object.keys(optionObject || {}).map((key)=>{
        suggestions.push({
            name: key,
            url: optionObject[key],
            handle: ()=> props.actionProvider.handleTextResponse(
                {
                  text:"Thank You! Type 'hello' to restart chat",
                }
                ),
         });
        return null;
    })

    return <RenderSuggestion suggestions={suggestions} {...props} />;
};    

export default Suggestions;