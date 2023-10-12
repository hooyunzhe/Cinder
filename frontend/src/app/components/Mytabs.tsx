import { Tabs, rem } from '@mantine/core';

export default function MyTabs() {
  const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <Tabs position="left" defaultValue="online">
      <Tabs.List>
        <Tabs.Tab value="online">
          Online
        </Tabs.Tab>
        <Tabs.Tab value="messages">
          Messages
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="online">
        Online tab content
      </Tabs.Panel>

      <Tabs.Panel value="messages">
        Messages tab content
      </Tabs.Panel>
    </Tabs>
  );
}
