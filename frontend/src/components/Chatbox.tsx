import React, { useState } from 'react';
import { Text, Paper, Badge, Input, Button, SimpleGrid } from '@mantine/core';

interface ChatBoxProps {
  name: string;
  online: boolean;
  x: number;
  y: number;
}

const ChatBox: React.FC<ChatBoxProps> = ({ name, online, x, y }) => {
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, newMessage]);
      setNewMessage('');
    }
  };

  return (
    <div
      style={{
        position: 'absolute',
        top: y,
        left: x,
      }}
    >
      <Paper
        style={{ padding: '16px', width: '300px' }}
        shadow="xs"
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Text size="xl" fw={700} style={{ marginRight: '8px' }}>
            {name}
          </Text>
          {online && <Badge color="green">Online</Badge>}
        </div>
        <SimpleGrid cols={1} spacing="sm">
          {messages.map((message, index) => (
            <div key={index}>
              <Text>{message}</Text>
            </div> 
          ))}
        </SimpleGrid>
        <div style={{ marginTop: '16px' }}>
          <Input
            value={newMessage}
            onChange={(event) => setNewMessage(event.currentTarget.value)}
            placeholder="Type your message..."
          />
          <Button style={{ marginTop: '8px' }} onClick={handleSend}>
            Send
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default ChatBox;
