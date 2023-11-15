import React from 'react';
import { Col, Flex, Row, Typography } from 'antd';

import './App.css';
import 'react-chatbot-kit/build/main.css'
import ChatBot from './components/chatbot';
import background from './assets/background_graphic.jpg'

function App() {
  return (
    <div style={{position: 'relative'}}>
    <div className='bg-filter' style={{
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'repeat',
      backgroundSize: "100%",
        }}>
      </div>
      <Row style={{minHeight: "100vh", }} justify={'space-between'} align={'middle'}>
      <Col span={24} style={{padding: 20}}>
        <Flex align='center' justify='center'>
          <Typography.Title>Welcome to Smile Zone</Typography.Title>
        </Flex>
      </Col>
      <Col span={24} style={{padding: 20}}>
        <ChatBot/>
      </Col>
      </Row>
      </div>
  );
}

export default App;
