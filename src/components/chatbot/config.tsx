import { createChatBotMessage } from 'react-chatbot-kit';
import ContactUs from './widgets/contactUs'
import Overview from './widgets/Overview';
import Suggestions from './widgets/Suggestions';
import SuggestionsOnText from './widgets/suggestionsOnText';
import { Avatar, Button, Divider, Typography } from 'antd';
import IConfig from 'react-chatbot-kit/build/src/interfaces/IConfig';
import phoneIcon from '../../assets/telephone.png'
import mailIcon from '../../assets/mail.png'
import { mail, phoneNumber } from '../constants';

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
          <Avatar shape="square" src={phoneIcon} size={14} style={{margin: 0, padding: 0}}/>
        </Button>
        </a>
        <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${mail}`} target='_blank' rel="noreferrer">
        <Button size={'small'}>
          <Avatar shape="square" src={mailIcon} size={14} style={{margin: 0, padding: 0}}/>
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