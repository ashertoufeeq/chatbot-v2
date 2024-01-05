import Chatbot from 'react-chatbot-kit'

import config, { botName } from './config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import { useState } from 'react';
import { FloatButton, Popover, Tooltip } from 'antd';
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
        <Tooltip title={`Hello, I am ${botName} chat with me!`} open={!clicked} placement='left'>
          <FloatButton style={{zIndex: 10000}} type="primary" icon={<CommentOutlined />}     
            shape="square"
            description="Chat"
            />
          </Tooltip>
      </Popover>
    </div>
  );
};

export default ChatBot;