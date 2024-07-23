import { SearchOutlined } from '@ant-design/icons';
import { ConfigProvider, Input } from 'antd';

export const Search = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            fontSize: 12,
            borderRadius: 17,
            paddingInline: 19,
            colorBorder: '#e1e1e1',
            hoverBorderColor: '#e1e1e1',
            activeBorderColor: '#e1e1e1',
            colorBgContainer: '#e1e1e1',
          },
        },
      }}
    >
      <Input
        className="h-[34px] w-[160px]"
        placeholder="搜索音乐"
        prefix={<SearchOutlined color="#717171" className="mr-1" />}
      />
    </ConfigProvider>
  );
};
