'use client';
import { Flex, Text } from '@mantine/core';
import Login from '@/components/Login';

export default function Home() {
  return (
    <Flex
      w='100vw'
      h='100vh'
      bg='linear-gradient(90deg, rgb(117, 185, 190), rgb(208, 214, 181), rgb(249, 181, 172))'
      direction='column'
      justify='center'
      align='center'
      gap='2vh'
    >
      <Text
        size='5vw'
        variant='gradient'
        gradient={{
          from: 'rgb(117, 185, 190)',
          to: 'rgb(249, 181, 172)',
          deg: 90,
        }}
      >
        Cinder
      </Text>
      <Text
        size='2vw'
        variant='gradient'
        gradient={{
          from: 'rgb(198, 204, 171)',
          to: 'red',
          deg: 90,
        }}
      >
        Match Made in Hell
      </Text>
      <Login />
    </Flex>
  );
}
