'use client';
import {
  Alert,
  Center,
  Button,
  Chip,
  Flex,
  Image,
  Modal,
  NativeSelect,
  SimpleGrid,
  Slider,
  Text,
  TextInput,
  Textarea,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [birthDay, setBirthDay] = useState(1);
  const [birthMonth, setBirthMonth] = useState(1);
  const [birthYear, setBirthYear] = useState(2000);
  const [outdoorHobbies, setOutdoorHobbies] = useState(['travel']);
  const [indoorHobbies, setIndoorHobbies] = useState(['books']);
  const [continuePressCount, setContinuePressCount] = useState(0);
  const { push } = useRouter();
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Flex
      w='100vw'
      h='100vh'
      justify='space-between'
      align='center'
      bg='linear-gradient(90deg, rgb(117, 185, 190), rgb(208, 214, 181), rgb(249, 181, 172))'
    >
      <SimpleGrid
        w='70%'
        h='100%'
        spacing='3vw'
        verticalSpacing='3vh'
        px='2vw'
        py='3vh'
        cols={3}
      >
        {Array(6)
          .fill(0)
          .map((x, i) => (
            <Center
              key={i}
              bg='#AAAAAA'
              style={{
                borderRadius: '15px',
              }}
              onClick={open}
            >
              <Text size='10rem' c='white'>
                +
              </Text>
            </Center>
          ))}
      </SimpleGrid>
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        padding='0'
        centered
        size='50%'
      >
        <Alert h='50vh' variant='filled' color='red' title='ALERT'>
          ERROR: FAILED TO ADD PROFILE PHOTO
        </Alert>
      </Modal>
      <Flex
        w='30%'
        h='100%'
        direction='column'
        justify='center'
        align='center'
        gap='2vh'
      >
        <TextInput
          w='90%'
          label='Name'
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
          w='90%'
          variant='filled'
          label='Bio'
          placeholder='Bio'
          value={bio}
          onChange={(event) => setBio(event.target.value)}
          error={
            continuePressCount > 0 && continuePressCount < 5
              ? 'Bio too short'
              : ''
          }
        />
        <Flex w='90%' h='6%' justify='space-around' align='center'>
          <Flex w='50%' h='100%'>
            <NativeSelect
              label='Gender'
              data={[...Array(50).fill(''), 'Other', 'Female', 'Male']}
            />
          </Flex>
          <Flex
            w='50%'
            h='100%'
            direction='column'
            justify='space-between'
            align='center'
          >
            <Text>Birthday</Text>
            <Flex w='100%' justify='space-around'>
              <Slider
                w='25%'
                min={1}
                max={31}
                value={birthDay}
                onChange={(value) => {
                  setBirthDay(value);
                  setName(`One who's born on day ${value} of the month`);
                }}
              />
              <Slider
                w='10%'
                min={1}
                max={12}
                value={birthMonth}
                onChange={(value) => {
                  setBirthMonth(value);
                  setName(`One who's born in month ${value} of the year`);
                }}
              />
            </Flex>
            <Slider
              w='60%'
              min={1923}
              max={2005}
              value={birthYear}
              onChange={(value) => {
                setBirthYear(value);
                setBio(`${2023 - value} years old person`);
              }}
            />
          </Flex>
        </Flex>
        <Flex
          w='90%'
          h='10%'
          direction='column'
          justify='space-between'
          align='center'
          gap='1vh'
        >
          <Text>Hobbies</Text>
          <Flex w='100%' justify='space-around'>
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
              <Chip size='xl' value='travel'>
                Travel
              </Chip>
              <Chip size='xl' value='hiking'>
                Hiking
              </Chip>
              <Chip size='xl' value='camping'>
                Camping
              </Chip>
            </Chip.Group>
          </Flex>
          <Flex w='100%' justify='space-around'>
            <Chip.Group
              multiple
              value={indoorHobbies}
              onChange={(values) => {
                setIndoorHobbies(values);
                setOutdoorHobbies((hobbies) =>
                  hobbies.splice(Math.floor(Math.random() * hobbies.length), 1),
                );
                setBio((bio) =>
                  values.length
                    ? `(loves ${values[values.length - 1]}!)${bio}`
                    : bio,
                );
              }}
            >
              <Chip size='xl' value='music'>
                Music
              </Chip>
              <Chip size='xl' value='books'>
                Books
              </Chip>
              <Chip size='xl' value='movies'>
                Movies
              </Chip>
            </Chip.Group>
          </Flex>
        </Flex>
        <NativeSelect
          w='90%'
          label='Height'
          data={Array.from({ length: 100 }, (x, i) => 1000 + i * 10).map(
            (height) => `${height}mm`,
          )}
        />
        <Button
          w='50%'
          onClick={() => setContinuePressCount((count) => count + 1)}
        >
          Continue
        </Button>
        <Button
          w='50%'
          {...(continuePressCount < 5 && { display: 'none' })}
          onClick={() => push('/home')}
        >
          Continue (for real)
        </Button>
      </Flex>
    </Flex>
  );
}
