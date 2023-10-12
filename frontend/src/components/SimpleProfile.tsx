import { BackgroundImage, Title, Flex } from '@mantine/core';

interface SimpleProfileProps {
  name: string;
  online: boolean;
}

export default function SimpleProfile({ name, online }: SimpleProfileProps) {
  return (
    <BackgroundImage
      src='surfer.jpg'
      h='500'
      style={{
        borderRadius: '15px',
      }}
    >
      <Flex
        direction='column'
        justify='center'
        align='center'
        style={{
          height: '100%',
          background: `rgba(0, 0, 0, ${online ? 0 : 0.6})`,
          borderRadius: '15px',
        }}
      >
        <Title size='1.5vw' c='white'>
          {name}
        </Title>
      </Flex>
    </BackgroundImage>
  );
}
