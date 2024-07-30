import { Flex } from 'components/Flex/Flex';
import { memo } from 'react';
import { Introduction } from './components/Introduction';
import { Player } from './components/Player';
import { Toolbar } from './components/Toolbar';

export const Controller = memo(() => {
  return (
    <Flex className="h-full">
      <Introduction />
      <Player />
      <Toolbar />
    </Flex>
  );
});
