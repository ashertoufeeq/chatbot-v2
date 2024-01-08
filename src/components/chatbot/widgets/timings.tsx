import React from 'react';
import { Card,  Typography } from 'antd';
import { businessTimings } from '../../constants';

const { Title } = Typography;

interface BusinessTiming {
  day: string;
  timing: string;
}

const BusinessHours: React.FC = () => {
  return (
    <div style={{  width: '240px' }}>
     <br/>
      <Card bordered={true}  title={<Title level={4} style={{margin: 0, padding: 0}}>Working Hours</Title>} size="small" color='light'>
       {(businessTimings ||[]).map(((item: BusinessTiming) => (<div style={{display: 'flex', flexDirection: 'column'}}>
        <span style={{ fontWeight: 'bold', fontSize: '14px' }}>{item.day}</span>
        <span style={{ fontSize: '12px' }}>{item.timing}</span>
       </div>)))}
      </Card>
    </div>
  );
};

export default BusinessHours;
