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
  const [name, setName] = useState('');
  const [birthDay, setBirthDay] = useState(1);
  const [birthMonth, setBirthMonth] = useState(1);
  const [birthYear, setBirthYear] = useState(2000);

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
        <TextInput
          w='25%'
          placeholder='Name'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <Flex w='25%' h='5%' justify='space-around' align='center'>
          <Text>Birthday</Text>
          <Flex
            w='50%'
            h='100%'
            direction='column'
            justify='space-between'
            align='center'
          >
            <Flex w='100%' justify='center'>
              <Slider
                w='35%'
                min={1}
                max={31}
                value={birthDay}
                onChange={(value) => {
                  setBirthDay(value);
                  setName(`Born on day ${value} of the month`);
                }}
                marks={[{ value: 16, label: 'Day' }]}
              />
              <Slider
                w='20%'
                min={1}
                max={12}
                value={birthMonth}
                onChange={(value) => {
                  setBirthMonth(value);
                  setName(`Born in month ${value} of the year`);
                }}
                marks={[{ value: 16, label: 'Month' }]}
              />
            </Flex>
            <Slider
              w='70%'
              min={1923}
              max={2005}
              value={birthYear}
              onChange={(value) => {
                setBirthYear(value);
                setName(`${2023 - value} years old person`);
              }}
              marks={[{ value: 1964, label: 'Year' }]}
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
