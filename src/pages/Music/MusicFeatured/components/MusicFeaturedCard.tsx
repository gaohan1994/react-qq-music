import { Tag, Typography } from 'antd';
import { Flex } from 'components/Flex/Flex';

export const MusicFeaturedCard = () => {
  return (
    <Flex full h-full className=" bg-orange-200 rounded-[6px]">
      <Flex className="absolute bottom-0 left-0 right-0 p-2">
        <Tag className="text-[10px]">首发</Tag>
        <Typography.Text ellipsis className="text-white">
          周杰伦周杰伦周杰伦周杰伦周杰伦周杰伦周杰伦周杰伦
        </Typography.Text>
      </Flex>
    </Flex>
  );
};
