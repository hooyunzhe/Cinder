'use client';
import {
  BackgroundImage,
  Button,
  Center,
  Flex,
  Image,
  Loader,
  TextInput,
  Title,
} from '@mantine/core';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(60);
  // const [timeLeft, setTimeLeft] = useState(0);
  const [speedPressCount, setSpeedPressCount] = useState(0);
  const [imageClicked, setImageClicked] = useState(false);
  const [usernameClicked, setUsernameClicked] = useState(false);
  const [passwordClicked, setPasswordClicked] = useState(false);
  const [loginClicked, setLoginClicked] = useState(false);
  const { push } = useRouter();

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTimeLeft((left) => left - 1);
    }, 1000);

    return () => clearTimeout(intervalID);
  }, []);

  return timeLeft > 0 ? (
    <Flex
      w='100vw'
      h='100vh'
      bg='linear-gradient(90deg, rgb(117, 185, 190), rgb(208, 214, 181), rgb(249, 181, 172))'
      direction='column'
      justify='center'
      align='center'
      gap='2vh'
    >
      <Title c='red'>Single and Desperate for Love?</Title>
      <Title>{timeLeft} seconds left</Title>
      <Loader color='rgb(117, 185, 190)' />
      <Button
        mt={`${speedPressCount * 20}vh`}
        mr={`${speedPressCount * 20 * (speedPressCount % 2 == 0 ? 1 : -1)}vw`}
        onClick={() => {
          setTimeLeft((left) => left - 10);
          setSpeedPressCount((count) => (count < 3 ? count + 1 : count));
        }}
      >
        Speed Up
      </Button>
      <Title c='red'>{"You've come to the right place!"}</Title>
    </Flex>
  ) : (
    <Flex w='100vw' h='100vh'>
      <Image
        w='70%'
        h='100%'
        src={imageClicked ? 'guy_looking.webp' : 'angry_couple.jpg'}
        alt='angry_couple_or_guy_looking'
        onClick={() => setImageClicked((clicked) => !clicked)}
      />
      <BackgroundImage w='30%' h='100%' p='5vw' src='red_background.png'>
        <Flex w='100%' h='100%' direction='column' justify='center' gap='1vw'>
          <Center>
            <Image
              w='250px'
              h='250px'
              src='cinder.png'
              alt='cinder'
              radius='50%'
            />
          </Center>
          {/* <Flex direction='column' justify='center' align='center' gap='1vh'> */}
          <TextInput
            w='100%'
            placeholder='Username'
            radius='lg'
            onClick={() => {
              setUsernameClicked(true);
              setImageClicked((clicked) => !clicked);
            }}
            disabled={usernameClicked}
            error={loginClicked ? 'Username cannot be empty!' : ''}
          />
          <TextInput
            w='100%'
            placeholder='Password'
            radius='lg'
            onClick={() => {
              setPasswordClicked(true);
              setImageClicked((clicked) => !clicked);
            }}
            disabled={passwordClicked}
            error={loginClicked ? 'Password cannot be empty!' : ''}
          />
          {/* </Flex> */}
          {/* <Flex direction='column' justify='center' align='center' gap='1vh'> */}
          <Center>
            <Button
              w='50%'
              color='red'
              radius='xl'
              onClick={() => {
                setLoginClicked(true);
                setImageClicked((clicked) => !clicked);
              }}
              disabled={loginClicked}
            >
              Login
            </Button>
            <Button
              w='50%'
              color='red'
              radius='xl'
              onClick={() => push('signup')}
            >
              Sign Up
            </Button>
          </Center>
          {/* </Flex> */}
        </Flex>
      </BackgroundImage>
    </Flex>
  );
}
