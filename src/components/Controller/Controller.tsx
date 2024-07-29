import { Flex } from 'components/Flex/Flex';
import { memo } from 'react';

export const Controller = memo(() => {
  return (
    <Flex>
      <Flex p-3>asd</Flex>
      <Flex full center>
        asd
      </Flex>
      <Flex p-3>asd</Flex>
    </Flex>
  );
});
