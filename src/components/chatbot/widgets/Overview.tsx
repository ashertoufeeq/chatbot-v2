import Options from './options';
import {data } from '../../constants/index'

const Overview = (props: any) => {

      const options =  Object.keys(data).map((key)=>({
        name: key,
        handler : () => props.actionProvider.handleSuggestions({
          suggestionKey: key 
        }),
      }))

      return <Options options={options} {...props} />;
    };    

export default Overview;