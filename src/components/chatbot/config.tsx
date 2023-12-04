import { createChatBotMessage } from 'react-chatbot-kit';
import DogPicture from './widgets/dogImage'
import Overview from './widgets/Overview';
import Suggestions from './widgets/Suggestions';

export const botName = 'Corry 2.0'

const config = {
  botName: botName,
  initialMessages: [createChatBotMessage(`Greetings, I’m ${botName}, and I’m here to assist you. Type 'hello' to start!`,{

  })],
  widgets: [
    {
      widgetName: 'dogPicture',
      widgetFunc: (props:any) => <DogPicture {...props} />,
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
  ]
};

export default config;