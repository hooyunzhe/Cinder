import { Flex, Tabs, Text, Divider, SimpleGrid } from '@mantine/core';
import Online from './Online';
import Offline from './Offline';

export default function MyTabs() {
  return (
    <Tabs w='100%' defaultValue='online'>
      <Tabs.List grow>
        <Tabs.Tab value='online'>Online</Tabs.Tab>
        <Tabs.Tab value='messages'>Messages</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value='online'>
        <SimpleGrid cols={3}>
          <Offline />
          <Offline />
          <Online />
          <Online />
          <Offline />
          <Online />
          <Offline />
          <Online />
        </SimpleGrid>
      </Tabs.Panel>
      <Tabs.Panel value='messages'>
        <Text size='xl' fw={700}>
          James
        </Text>
        <Text c='dimmed'>"Hey there! 🏄‍♂️"</Text>
        <Divider my='sm' variant='dashed' />

        <Text size='xl' fw={700}>
          Lucas
        </Text>
        <Text c='dimmed'>"Hey there! 🥵"</Text>
        <Divider my='sm' variant='dashed' />

        <Text size='xl' fw={700}>
          Ken
        </Text>
        <Text c='dimmed'>"Hey there! 😘"</Text>
        <Divider my='sm' variant='dashed' />

        <Text size='xl' fw={700}>
          John
        </Text>
        <Text c='dimmed'>"Hey there! 🍑"</Text>
        <Divider my='sm' variant='dashed' />
      </Tabs.Panel>
    </Tabs>
  );
}
