// new file called DogPicture.jsx
import { Avatar, Button } from 'antd';
import phoneIcon from '../../../assets/telephone.png'
import mailIcon from '../../../assets/mail.png'
import { mail, phoneNumber } from '../../constants';

const CpntactUs = () => {
  return (
    <div>
     <div  style={{display: 'flex', justifyContent: 'center'}}>
        <a href={`tel:${phoneNumber}`}>
          <Button size={'small'} style={{marginRight: 10}} icon={<Avatar shape="square" src={'/telephone.png'} size={14} style={{margin: 0, padding: 0}}/>}>
            Call Us 
          </Button>
        </a>
        <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${mail}`} target='_blank' rel="noreferrer">
        <Button size={'small'} icon={<Avatar shape="square" src={'/mail.png'} size={14} style={{margin: 0, padding: 0}}/>}>
          Mail Us 
        </Button>
        </a>
        </div>
    </div>
  );
};

export default CpntactUs;