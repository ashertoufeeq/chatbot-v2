import Chatbot from 'react-chatbot-kit'

import config, { botName } from './config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import { useState } from 'react';
import { FloatButton, Grid, Modal, Popover, Tooltip, Typography } from 'antd';
import { CommentOutlined, } from '@ant-design/icons';

const ChatBot = () => {
    const [clicked, setClicked] = useState(false);

    const handleClickChange = (open: boolean) => {
      setClicked(open);
    };
    const {xs} =  Grid.useBreakpoint()

    return (
    <div>
      {!xs ? <Popover
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
        </Popover>: 
        <FloatButton onClick={()=>{setClicked(o => !o)}} style={{zIndex: 10000}} type="primary" icon={<CommentOutlined />}     
          shape="square"
          description="Chat"
        />
      }
        {xs &&<Modal zIndex={12000} width={'320px'} title={<Typography.Title> </Typography.Title>} open={clicked} onCancel={()=>{setClicked(false)}} footer={null}>
          <Chatbot
                config={config}
                actionProvider={ActionProvider}
                messageParser={MessageParser}
              />      
        </Modal>}
    </div>
  );
};

export default ChatBot;