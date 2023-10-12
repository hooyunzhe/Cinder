import { BackgroundImage, Text, Flex } from '@mantine/core';

export default function Online() {
  return (
    <BackgroundImage src='surfer.jpg' h='200'>
      <Flex
        direction='column'
        justify='center'
        align='center'
        style={{
          background: 'rgba(0, 0, 0, 0)',
          height: '100%',
        }}
      >
        <Text size='lg' color='white'>
          James
        </Text>
      </Flex>
    </BackgroundImage>
  );
}
