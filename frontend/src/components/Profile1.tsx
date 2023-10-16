// Profile.tsx
import React, { useState } from 'react';
import { Image, Text, Button, Flex } from '@mantine/core';
import Profile1 from './Profile1';

export default function Profile() {
  const [isHidden, setIsHidden] = useState(false);
  const [replicatedButtons, setReplicatedButtons] = useState([]);
  const [showProfile1, setShowProfile1] = useState(false);

  const handleHide = () => {
    setIsHidden(true);
  };

  const replicateButton = () => {
    setReplicatedButtons((prevButtons) => [
      ...prevButtons,
      <Button
        w="20%"
        h="80%"
        color="blue"
        radius="xl"
        style={{
          fontSize: '1.5rem',
        }}
      >
        ☆
      </Button>
    ]);
  };

  const shiftRight = () => {
    setIsHidden(true);
    setShowProfile1(true);
  };

  return (
    <Flex
      w="20vw"
      h="100vh"
      p="1vw"
      direction="column"
      style={{
        transform: isHidden ? 'rotate(45deg)' : 'none',
        visibility: isHidden ? 'hidden' : 'visible',
        transition: 'transform 1s ease-in-out, visibility 0.5s ease-in-out',
      }}
    >
      <Image
        h="60%"
        src="brazil.jpg"
        alt="brazil"
        style={{
          borderTopLeftRadius: '15px',
          borderTopRightRadius: '15px',
        }}
      />
      <Flex
        w="100%"
        h="40%"
        p="1vw"
        bg="white"
        direction="column"
        justify="space-around"
        style={{
          borderBottomLeftRadius: '15px',
          borderBottomRightRadius: '15px',
        }}
      >
        <Text size="lg">Marketing Director</Text>
        <Flex
          mih={50}
          bg="rgba(0, 0, 0, 0)"
          gap="md"
          justify="left"
          align="left"
          direction="row"
          wrap="nowrap"
        >
          <Button variant="filled" color="pink" radius="lg">
            Hiking
          </Button>
          <Button variant="filled" color="pink" radius="lg">
            Surfing
          </Button>
        </Flex>
        <Text size="2rem" fw={700}>
          James, 31
        </Text>
        <Text c="dimmed">
          Hey there! 🏄‍♂️ I'm James, and I ride the tides of life both on and off the board. Looking for someone to ride the waves of life with both in and out of the ocean. Swipe right, and let's see where the tide takes us!
        </Text>
        <Flex
          mih={50}
          bg="rgba(0, 0, 0, 0)"
          px="1vw"
          gap="md"
          justify="space-around"
          align="center"
          direction="row"
          wrap="nowrap"
        >
          <Button
            w="20%"
            h="80%"
            color="red"
            radius="xl"
            style={{
              fontSize: '1.5rem',
            }}
            onClick={handleHide}
          >
            X
          </Button>
          <Button
            w="20%"
            h="80%"
            color="blue"
            radius="xl"
            style={{
              fontSize: '1.5rem',
            }}
            onClick={replicateButton}
          >
            ☆
          </Button>
          <Button
            w="20%"
            h="80%"
            color="green"
            radius="xl"
            style={{
              fontSize: '1.5rem',
            }}
            onClick={shiftRight}
          >
            ♡
          </Button>
          {replicatedButtons}
        </Flex>
      </Flex>
      {showProfile1 && <Profile1 />}
    </Flex>
  );
}
