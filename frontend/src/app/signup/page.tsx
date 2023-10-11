'use client';
import {
  Box,
  Flex,
  Image,
  Slider,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { useState } from 'react';

export default function Home() {
  const [age, setAge] = useState(21);

  return (
    <Flex
      w='100vw'
      h='100vh'
      bg='linear-gradient(90deg, rgb(117, 185, 190), rgb(208, 214, 181), rgb(249, 181, 172))'
    >
      <Box w='50%' h='100%'>
        <Image src='profile_placeholder.png' alt='profile' />
      </Box>
      <Flex
        w='50%'
        h='100%'
        direction='column'
        justify='center'
        align='center'
        gap='3vh'
      >
        <Title>Profile</Title>
        <TextInput placeholder='Name' />
        <Flex w='15%' justify='space-between'>
          <Text>Age</Text>
          <Slider
            w='30%'
            value={age}
            onChange={setAge}
            marks={[
              { value: 0, label: '0' },
              { value: 50, label: '~' },
              { value: 100, label: '100' },
            ]}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
