import { Space, Tag } from "antd";

const Options = (props:any) => {
    return (
      <div className="options">
        <Space size={[0, 8]} wrap>
              {props.options.map((option:any) => {
            return (
                    <Tag
                        style={{cursor: 'pointer'}}
                        onClick={option.handler}
                        color={option.color || 'blue'}
                        key={option.id}
                    >
                        {option.name}
                    </Tag>
            );
          })}
        </Space>
      </div>
    );
  };
  
  export default Options;