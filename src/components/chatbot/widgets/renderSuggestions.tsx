import {useState, useEffect} from 'react';
import { Space, Tag, Typography } from "antd";
import Timings from './timings';

const Suggestions = (props:any) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const text = props?.text || '';
    let currentIndex = 0;
    
    const intervalId = setInterval(() => {
      setDisplayText((prevText) => prevText + (text[currentIndex]? text[currentIndex]:''));
      currentIndex++;

      if (currentIndex === (text.length - 1)) {
        clearInterval(intervalId);
      }
    }, 10); // Adjust the interval based on your preference

    return () => clearInterval(intervalId);
  }, [props?.text]);

    return (
      <div className="options">
        <Space size={[8, 8]} wrap>
         {displayText? <Typography.Text type="secondary" className="typewriter">
            {displayText}
          </Typography.Text>: <Typography.Text type="secondary" className="typewriter">
            {props?.fetching?'...':''}
          </Typography.Text>}
          <br/>
        </Space>
        <Space size={[8, 8]} wrap>
              {props.suggestions.map(({name, url,handle, color}: {name: string, url: string, color?: string, handle: () => void}, ind: number) => {
            return (
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <a href={url} target="_blank" rel="noreferrer">
                    <Tag
                        onClick={()=>{
                            handle()
                            window.open(url, '_blank')
                        }}
                        style={{cursor: 'pointer'}}
                        color={color || 'blue'}
                        key={ind}
                    >
                        {name}
                    </Tag>
                </a>
                  {name === 'Contact Us' && 
                    <div style={{width: '100%'}}>
                        <Timings />
                    </div>}
                </div>
            );
          })}
        </Space>
      </div>
    );
  };
  
  export default Suggestions;