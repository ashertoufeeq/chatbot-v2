import Chatbot from 'react-chatbot-kit'

import config from './config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import { useState } from 'react';
import { FloatButton, Popover } from 'antd';
import { CommentOutlined, } from '@ant-design/icons';

const ChatBot = () => {
    const [clicked, setClicked] = useState(false);

    const handleClickChange = (open: boolean) => {
      setClicked(open);
    };
    
    return (
    <div>
      <Popover
        content={
            <Chatbot
                config={config}
                actionProvider={ActionProvider}
                //   messageHistory={loadMessages()}
                messageParser={MessageParser}
                    //   saveMessages={saveMessages as any}
                />
        }
        trigger="click"
        open={clicked}
        onOpenChange={handleClickChange}
      >
        <FloatButton type="primary" icon={<CommentOutlined />}/>
      </Popover>
    </div>
  );
};

export default ChatBot;