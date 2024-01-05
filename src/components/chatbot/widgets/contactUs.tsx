// new file called DogPicture.jsx
import { Button } from 'antd';
import { mail, mailCC, phoneNumber } from '../../constants';
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';

const CpntactUs = () => {
  return (
    <div>
     <div  style={{display: 'flex', justifyContent: 'center'}}>
        <a href={`tel:${phoneNumber}`}>
          <Button size={'small'} style={{marginRight: 10}} icon={<PhoneOutlined className='text-black'/>}>
            Call Us 
          </Button>
        </a>
        <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${mail}&cc=${mailCC}`} target='_blank' rel="noreferrer">
          <Button size={'small'} icon={<MailOutlined className='bg-black'/>}>
            Mail Us 
          </Button>
        </a>
        </div>
    </div>
  );
};

export default CpntactUs;