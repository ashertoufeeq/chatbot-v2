import Options from './options';

const Overview = (props: any) => {
      const options = [
        {
          name: "I have Pain",
          handler: ()=> props.actionProvider.handleTextResponse({
            text:`There are many possible causes of tooth pain, such as tooth decay, dental erosion, abscess, pulpitis, cracked or impacted teeth, gum disease, sinus infection, or bruxism. Depending on the cause and severity of the pain, you may need different treatments, such as fillings, root canal, antibiotics, or extraction.`,
            userMessage: "I have Pain"
          }),
          id: 1
        },
        {
          name: "I have sensitivity",
          handler: ()=> props.actionProvider.handleTextResponse(
            {
              text:'Sensitivity is a common dental problem that causes discomfort or pain when your teeth are exposed to certain stimuli, such as hot, cold, sweet, or acidic foods and drinks. It can be caused by various factors, such as worn enamel, gum recession, tooth decay, or dental procedures. ou can book an appointment with one of our dentists online or by calling us.',
              userMessage: "I have sensitivity"
            }
            ),
          id: 2
        },
        {
          name: "I have Gap between teeth",
          handler: ()=> props.actionProvider.handleTextResponse(
            {
              text:'The best treatment for your case depends on the cause and size of the gap, as well as your personal preference and budget.',
              userMessage: "I have Gap between teeth"
            }
            ),
          id: 3
        },
        {
          name: "Broken Tooth",
          handler: ()=> props.actionProvider.handleTextResponse(
            {
              text:'I’m sorry to hear that you have a broken tooth. A broken tooth can be caused by many factors, such as biting hard foods, trauma, or tooth decay. It can also cause pain, sensitivity, and swelling.',
              userMessage: "Broken Tooth"
            }
            ),
          id: 4
        }
      ];

      return <Options options={options} {...props} />;
    };    

export default Overview;