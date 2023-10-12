import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  ActionIcon,
  Flex,
  ButtonGroup,
} from '@mantine/core';

export default function Profile() {
  return (
    <Flex w='20vw' h='60vh' direction='column'>
      <Image src='surfer.jpg' height={400} alt='Surfer' />
      <Flex
        w='100%'
        h='40%'
        bg='white'
        direction='column'
        justify='space-between'
      >
        <Text size='lg'>Marketing Director</Text>
        <Flex
          mih={50}
          bg='rgba(0, 0, 0, 0)'
          gap='md'
          justify='left'
          align='left'
          direction='row'
          wrap='nowrap'
        >
          <Button variant='filled' color='pink' radius='lg'>
            Hiking
          </Button>
          <Button variant='filled' color='pink' radius='lg'>
            Surfing
          </Button>
        </Flex>
        <Text size='xl' fw={700}>
          James, 31
        </Text>
        <Text c='dimmed'>
          "Hey there! 🏄‍♂️ I'm James, and I ride the tides of life both on and off
          the board. Looking for someone to ride the waves of life with – both
          in and out of the ocean. Swipe right, and let's see where the tide
          takes us!"
        </Text>

        <Flex
          mih={50}
          bg='rgba(0, 0, 0, 0)'
          gap='md'
          justify='center'
          align='center'
          direction='row'
          wrap='nowrap'
        >
          <Button w='20%' h='80%' radius={'xl'}>
            1
          </Button>
          <Button w='20%' h='80%' radius={'xl'}>
            1
          </Button>
          <Button w='20%' h='80%' radius={'xl'}>
            1
          </Button>
          <Button w='20%' h='80%' radius={'xl'}>
            1
          </Button>
          <Button w='20%' h='80%' radius={'xl'}>
            1
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
