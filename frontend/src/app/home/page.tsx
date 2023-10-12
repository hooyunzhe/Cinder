'use client';
import { Flex, Title } from '@mantine/core';
import MyTabs from '../../components/MyTabs';
import Profile from '@/components/Profile';

export default function Home() {
  return (
    <Flex
      w='100vw'
      h='100vh'
      bg='linear-gradient(90deg, rgb(117, 185, 190), rgb(208, 214, 181), rgb(249, 181, 172))'
    >
      <Flex w='40%' h='100%' bg='white' direction='column'>
        <Title ml='1vw'>Cinder</Title>
        <MyTabs />
      </Flex>
      <Flex w='60%' h='100%' justify='center' align='center'>
        <Profile />
      </Flex>
    </Flex>
  );
}
