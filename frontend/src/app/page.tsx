'use client';
import '@mantine/core/styles.css';
import { Center, Text } from '@mantine/core';
import Profile from './components/Profile';
import MyTabs from './components/Mytabs';

export default function Home() {
  return (
    <Center
      w='100vw'
      h='100vh'
      bg='linear-gradient(
      90deg,
      rgb(117, 185, 190),
      rgb(208, 214, 181),
      rgb(249, 181, 172)
    )'
    >
      <MyTabs />
      {/* <Text
        size='5vw'
        variant='gradient'
        gradient={{
          from: 'rgb(117, 185, 190)',
          to: 'rgb(249, 181, 172)',
          deg: 90,
        }}
      >
        Cinder
      </Text> */}
      <Profile />
    </Center>
  );
}
