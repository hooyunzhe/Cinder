import { BackgroundImage, Title, Flex} from '@mantine/core';

interface SimpleProfileProps {
  name: string;
  online: boolean;
  imageSrc: string;
}

export default function SimpleProfile({ name, online, imageSrc}: SimpleProfileProps) {
  return (
    <BackgroundImage
      src={imageSrc}
      h={300}
      style={{
        borderRadius: '15px',
        position: 'relative', // Add position relative to the container
      }}
    >
      <Flex
        direction='column'
        justify='flex-end'
        align='center'
        style={{
          height: '100%',
          background: `rgba(0, 0, 0, ${online ? 0 : 0.6})`,
          borderRadius: '15px',
        }}
      >
        <Title size={20} style={{ color: 'white' }}>
          {name}
        </Title>
      </Flex>

      {online && (
        <div
          style={{
            position: 'absolute',
            bottom: '10px',
            right: '10px',
            background: 'green',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
          }}
        />
      )}
    </BackgroundImage>
  );
}
