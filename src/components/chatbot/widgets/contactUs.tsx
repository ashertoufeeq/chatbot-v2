// new file called DogPicture.jsx
import { Avatar, Button } from 'antd';
import { mail, phoneNumber } from '../../constants';

const CpntactUs = () => {
  return (
    <div>
     <div  style={{display: 'flex', justifyContent: 'center'}}>
        <a href={`tel:${phoneNumber}`}>
          <Button size={'small'} style={{marginRight: 10}} icon={<Avatar shape="square" src={'https://media.exatorial.com/6514f0304d65e622e8526c56--6592c2bd42c0e96b1210ac7d-telephone.png?Expires=1704118728&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9tZWRpYS5leGF0b3JpYWwuY29tLzY1MTRmMDMwNGQ2NWU2MjJlODUyNmM1Ni0tNjU5MmMyYmQ0MmMwZTk2YjEyMTBhYzdkLXRlbGVwaG9uZS5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3MDQxMTg3Mjh9fX1dfQ__&Signature=LpLgNS-LJDT8-KZ-76rgDeTDo8f6fCuS7pxTLtam6qjLgLI8H7D9roi6DHuj8scPfghbXguOEhWCECNuo%7ENW5LyTfHc1Nggk5zBVWEtKegcfI1dugrYeQrumKmGw7Y7wblWnJDsMcjCm6ylsVvVzfbQJx5-bMJBEhoC3yu%7EnZcwnqkOpxTZxfe0moFAaaQo9Pp04gCzhyOBuF4V7J1BqGw21sE7t3g65rDrtxARPm44FKfQ-kdAG1ndvynLvWaAQk3BE7Ngbqv9pGYYpFmZ7vL1fUU8eyCwPbC5dmvsqVdH7V1tJf-WCEFTSu3H19NtXEv5fhwmq3jl8IG4AYTbrbQ__&Key-Pair-Id=KM9L1E1NV8TFW'} size={14} style={{margin: 0, padding: 0}}/>}>
            Call Us 
          </Button>
        </a>
        <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${mail}`} target='_blank' rel="noreferrer">
        <Button size={'small'} icon={<Avatar shape="square" src={"https://media.exatorial.com/6514f0304d65e622e8526c56--6592c3751c077906c1048cc7-mail.png?Expires=1704118912&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9tZWRpYS5leGF0b3JpYWwuY29tLzY1MTRmMDMwNGQ2NWU2MjJlODUyNmM1Ni0tNjU5MmMzNzUxYzA3NzkwNmMxMDQ4Y2M3LW1haWwucG5nIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzA0MTE4OTEyfX19XX0_&Signature=DPGwENUcaYydCsFdlK2hGO4cQu7dOH3KIaWqaPm0iSxcQp3863hCZ%7E%7EayvthXjyrzR%7EQdGMqz6ViWlBfbLVTO5nltUiz%7EBe%7EDfI4dDQQeDqk0E8nRZAo-APHmY7H8nyePTXu%7EkvNwPxH7Mkv4hwuHD8anJe%7EpSoYY%7E3vURCLt4DUSNeMMU8v-P5Ppl9AeAos0W5aj1ElmVPkQzyoVoLRHJyp9uGnESnd98Bosyty5DzCnhu5ycZGduxFoZew0r6PyDeX-fSgqkZ6%7E-WDUN2n8zY%7EowQj29jVlVtZxCTd5uRYnBlFK9cxKtNwYo6JeTOqjLR9B553eN2oALRJMc7fxQ__&Key-Pair-Id=KM9L1E1NV8TFW"} size={14} style={{margin: 0, padding: 0}}/>}>
          Mail Us 
        </Button>
        </a>
        </div>
    </div>
  );
};

export default CpntactUs;