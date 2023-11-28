import { Space, Tag } from "antd";

const Suggestions = (props:any) => {
    return (
      <div className="options">
        <Space size={[0, 8]} wrap>
              {props.suggestions.map(({name, url,handle, color}: {name: string, url: string, color?: string, handle: () => void}, ind: number) => {
            return (
                <a href={url} target="_blank" rel="noreferrer">
                    <Tag
                        onClick={()=>{
                            handle()
                            window.open(url, '_blank')
                        }}
                        style={{cursor: 'pointer'}}
                        color={color || 'blue'}
                        key={ind}
                    >
                        {name}
                    </Tag>
                </a>
            );
          })}
        </Space>
      </div>
    );
  };
  
  export default Suggestions;