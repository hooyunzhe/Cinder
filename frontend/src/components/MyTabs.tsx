import React, { useState } from 'react';
import { Tabs, Text, SimpleGrid, Button } from '@mantine/core';
import SimpleProfile from './SimpleProfile';
import ChatBox from './Chatbox';

export default function MyTabs() {
  const [isChatBoxOpen, setChatBoxOpen] = useState(false); // State to control the visibility of ChatBox

  const [chatBoxPosition, setChatBoxPosition] = useState({ x: 0, y: 0 }); // State to set ChatBox position

  const handleChatBoxClick = (x, y) => {
    setChatBoxPosition({ x, y });
    setChatBoxOpen(true);
  };

  return (
    <Tabs w='100%' defaultValue='messages'>
      <Tabs.List grow>
        <Tabs.Tab value='messages'>Messages</Tabs.Tab>
        <Tabs.Tab value='online'>Online</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value='messages'>
        <div
          style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '12px',
            marginBottom: '8px',
            cursor: 'pointer',
          }}
          onClick={(event) => handleChatBoxClick(event.clientX, event.clientY)}
        >
          <Text size='xl' fw={700}>
            James
          </Text>
          <Text c='dimmed'>Hey there! 🏄‍♂️</Text>
        </div>

        {/* Add similar click handlers for other text boxes */}
      </Tabs.Panel>
      <Tabs.Panel value='online'>
        <SimpleGrid cols={3} p='1vw'>
          <SimpleProfile name='James' online={true} imageSrc='black.jpeg' />
          <SimpleProfile name='Benjamin' online={false} imageSrc='brazil.jpg' />
          <SimpleProfile name='Andrew' online={true} imageSrc='surfer.jpg' />
          <SimpleProfile name='Liam' online={false} imageSrc='surfer1.jpg' />
        </SimpleGrid>
      </Tabs.Panel>
      {isChatBoxOpen && (
        <ChatBox
          name='John' // Pass the name or data you want
          online={true} // Pass the online status or data you want
          x={chatBoxPosition.x}
          y={chatBoxPosition.y}
        />
      )}
    </Tabs>
  );
}
