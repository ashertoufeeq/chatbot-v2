import {useState} from 'react';
import { Space,  Typography } from "antd";
import {basicQuestions} from '../../constants';

const Suggestions = () => {
  const [answer, setAnswer] = useState([]);

    return (
      <div className="options">
        <Space size={[8, 8]} wrap>
              {Object.keys(basicQuestions||{}).map((key:string, ind: number) => {
            return (
              <div style={{display: 'flex', flexDirection: 'column'}}>
                    <Typography.Paragraph
                        code
                        onClick={()=>{
                          setAnswer(basicQuestions[key])
                        }}
                        style={{cursor: 'pointer', display:'flex', flexWrap:"wrap", overflowWrap: "break-word", margin:0, padding:0,maxWidth:"320px"}}
                        color={'blue'}
                        key={ind}
                    >
                        {key}
                    </Typography.Paragraph>
                </div>
            );
          })}
        </Space>
        <Space size={[8, 8]} wrap>
          <br/>
         {answer.length>0? 
         answer.map(item => (<>
          <Typography.Text type="secondary"  style={{margin:0, padding:0,'textAlign': 'left'}}>
            {item}
          </Typography.Text>
          <br/>
          </>
       ))
          : <Typography.Text type="secondary" className="typewriter">
          </Typography.Text>}
          <br/>
        </Space>
      </div>
    );
  };
  
  export default Suggestions;