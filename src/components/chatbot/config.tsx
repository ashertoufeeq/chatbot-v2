import { createChatBotMessage } from 'react-chatbot-kit';
import ContactUs from './widgets/contactUs'
import Overview from './widgets/Overview';
import Suggestions from './widgets/Suggestions';
import SuggestionsOnText from './widgets/suggestionsOnText';
import { Button, Divider, Typography, } from 'antd';
import IConfig from 'react-chatbot-kit/build/src/interfaces/IConfig';
import { mail, mailCC, phoneNumber } from '../constants';
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';

export const botName = 'Corry 2.0'

const config: IConfig = {
  botName: botName,
  initialMessages: [createChatBotMessage(`Greetings, I’m ${botName}, and I’m here to assist you. Type 'hello' to start!`,{

  })],
  customComponents: {
    header:()=> <><div style={{display: 'flex', justifyContent: 'space-between',  paddingBottom: 10}}>
      <Typography.Paragraph  style={{margin: 0, padding: 0}}>
        <b>Conversation with {botName}</b>
      </Typography.Paragraph>
      <div  style={{display: 'flex', justifyContent: 'center'}}>
      <a href={`tel:${phoneNumber}`}>
        <Button size={'small'} style={{marginRight: 10}}>
          <PhoneOutlined/>
        </Button>
        </a>
        <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${mail}&cc=${mailCC}`} target='_blank' rel="noreferrer">
        <Button size={'small'}>
          <MailOutlined/>
        </Button>
        </a>
        </div>
    </div>
    <Divider style={{margin: 0, padding: 0}}/>
    </>
  },
  widgets: [
    {
      widgetName: 'contactUs',
      widgetFunc: (props:any) => <ContactUs {...props} />,
      props:{},
      mapStateToProps: []
    },
    {
      widgetName: 'overview',
      widgetFunc: (props:any) => <Overview {...props} />,
      props:{},
      mapStateToProps: ["messages"]
    },
    {
      widgetName: 'suggestions',
      widgetFunc: (props:any) => <Suggestions {...props} />,
      props:{},
      mapStateToProps: ["messages"]
    },
    {
      widgetName: 'suggestionsOnText',
      widgetFunc: (props:any) => <SuggestionsOnText {...props} />,
      props:{},
      mapStateToProps: ["messages"]
    }
  ]
};

export default config;