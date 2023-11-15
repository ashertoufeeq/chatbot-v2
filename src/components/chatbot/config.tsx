import { createChatBotMessage } from 'react-chatbot-kit';
import DogPicture from './widgets/dogImage'
import Overview from './widgets/Overview';

export const botName = 'SmileBot'

const config = {
  botName: botName,
  initialMessages: [createChatBotMessage(`Greetings, I’m ${botName}, and I’m here to assist you.`,{

  }),
  createChatBotMessage(
    "what I can help you with. You can also type in.",
    {
      delay: 400,
      widget: "overview"
    }
  )],
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
  ]
};

export default config;