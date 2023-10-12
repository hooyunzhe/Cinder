'use client';
import {
  Box,
  Button,
  Chip,
  Flex,
  Image,
  Slider,
  Text,
  TextInput,
  Textarea,
  Title,
} from '@mantine/core';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [birthDay, setBirthDay] = useState(1);
  const [birthMonth, setBirthMonth] = useState(1);
  const [birthYear, setBirthYear] = useState(2000);
  const [outdoorHobbies, setOutdoorHobbies] = useState(['travel']);
  const [indoorHobbies, setIndoorHobbies] = useState(['books']);
  const [continuePressCount, setContinuePressCount] = useState(0);
  const { push } = useRouter();

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
        gap='2vh'
      >
        <Title>Profile</Title>
        <TextInput
          w='25%'
          placeholder='Name'
          value={name}
          onChange={(event) => setName(event.target.value)}
          error={
            continuePressCount > 0 && continuePressCount < 5
              ? 'Name too long'
              : ''
          }
        />
        <Textarea
          w='25%'
          variant='filled'
          placeholder='About yourself'
          value={about}
          onChange={(event) => setAbout(event.target.value)}
          error={
            continuePressCount > 0 && continuePressCount < 5
              ? 'About yourself too short'
              : ''
          }
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
                  setName(`One who's born on day ${value} of the month`);
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
                  setName(`One who's born in month ${value} of the year`);
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
                setAbout(`${2023 - value} years old person`);
              }}
              marks={[{ value: 1964, label: 'Year' }]}
            />
          </Flex>
        </Flex>
        <Flex
          w='25%'
          h='10%'
          direction='column'
          justify='space-between'
          align='center'
        >
          <Text>Hobbies</Text>
          <Flex>
            <Chip.Group
              multiple
              value={outdoorHobbies}
              onChange={(values) => {
                setOutdoorHobbies(values);
                setIndoorHobbies((hobbies) =>
                  hobbies.splice(Math.floor(Math.random() * hobbies.length), 1),
                );
                setName((name) =>
                  values.length
                    ? `(loves ${values[values.length - 1]}!)${name}`
                    : name,
                );
              }}
            >
              <Chip value='travel'>Travel</Chip>
              <Chip value='hiking'>Hiking</Chip>
              <Chip value='camping'>Camping</Chip>
            </Chip.Group>
          </Flex>
          <Flex>
            <Chip.Group
              multiple
              value={indoorHobbies}
              onChange={(values) => {
                setIndoorHobbies(values);
                setOutdoorHobbies((hobbies) =>
                  hobbies.splice(Math.floor(Math.random() * hobbies.length), 1),
                );
                setAbout((about) =>
                  values.length
                    ? `(loves ${values[values.length - 1]}!)${about}`
                    : about,
                );
              }}
            >
              <Chip value='music'>Music</Chip>
              <Chip value='books'>Books</Chip>
              <Chip value='movies'>Movies</Chip>
            </Chip.Group>
          </Flex>
        </Flex>
        <Button
          w='25%'
          onClick={() => setContinuePressCount((count) => count + 1)}
        >
          Continue
        </Button>
        <Button
          {...(continuePressCount < 5 && { display: 'none' })}
          onClick={() => push('/home')}
        >
          Continue (for real)
        </Button>
      </Flex>
    </Flex>
  );
}
