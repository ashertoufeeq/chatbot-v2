import Chatbot from 'react-chatbot-kit'

import config from './config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import { useState } from 'react';
import { FloatButton, Popover } from 'antd';
import { CommentOutlined, } from '@ant-design/icons';

const ChatBot = () => {
    const [showBot, setShowBot] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [hovered, setHovered] = useState(false);
  
    const hide = () => {
      setClicked(false);
      setHovered(false);
    };
  
    const handleHoverChange = (open: boolean) => {
      setHovered(open);
      setClicked(false);
    };
  
    const handleClickChange = (open: boolean) => {
      setHovered(false);
      setClicked(open);
    };
    const toggleBot = () => {
        setShowBot(p => !p);
    }
    // const saveMessages = (messages: any, HTMLString:any) => {
    //   localStorage.setItem('chat_messages', JSON.stringify(messages));
    // };
  
    // const loadMessages = () => {
    //   const messages = JSON.parse(localStorage.getItem('chat_messages')|| '{}');
    //   return messages;
    // };
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
        title="Welcome to Smile Zone"
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