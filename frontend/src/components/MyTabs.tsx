import { Tabs, Text, Divider, SimpleGrid } from '@mantine/core';
import SimpleProfile from './SimpleProfile';

export default function MyTabs() {
  return (
    <Tabs w='100%' defaultValue='messages'>
      <Tabs.List grow>
        <Tabs.Tab value='messages'>Messages</Tabs.Tab>
        <Tabs.Tab value='online'>Online</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value='messages'>
        <Text size='xl' fw={700}>
          James
        </Text>
        <Text c='dimmed'>Hey there! 🏄‍♂️</Text>
        <Divider my='sm' variant='dashed' />

        <Text size='xl' fw={700}>
          Lucas
        </Text>
        <Text c='dimmed'>Hey there! 🥵</Text>
        <Divider my='sm' variant='dashed' />

        <Text size='xl' fw={700}>
          Ken
        </Text>
        <Text c='dimmed'>Hey there! 😘</Text>
        <Divider my='sm' variant='dashed' />

        <Text size='xl' fw={700}>
          John
        </Text>
        <Text c='dimmed'>Hey there! 🍑</Text>
        <Divider my='sm' variant='dashed' />
      </Tabs.Panel>
      <Tabs.Panel value='online'>
        <SimpleGrid cols={3} p='1vw'>
          <SimpleProfile name='James' online={true} />
          <SimpleProfile name='Benjamin' online={false} />
          <SimpleProfile name='Andrew' online={true} />
          <SimpleProfile name='Liam' online={false} />
        </SimpleGrid>
      </Tabs.Panel>
    </Tabs>
  );
}
