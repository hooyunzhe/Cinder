'use client';
import { Flex } from '@mantine/core';

export default function Home() {
  return (
    <Flex
      w='100vw'
      h='100vh'
      bg='linear-gradient(90deg, rgb(117, 185, 190), rgb(208, 214, 181), rgb(249, 181, 172))'
    >
      <Flex w='50%'>Temp</Flex>
      <Flex w='50%'>Temp</Flex>
    </Flex>
  );
}
