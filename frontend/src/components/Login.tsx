import { Button, Text, TextInput, Box } from '@mantine/core';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Login() {
  const [loginPressCount, setLoginPressCount] = useState(0);
  const [loginDisabled, setLoginDisabled] = useState(true);
  const [inputPressCount, setInputPressCount] = useState(0);
  const [inputDisabled, setInputDisabled] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const { push } = useRouter();

  useEffect(() => {
    setInputDisabled(true);
  }, [inputPressCount]);

  useEffect(() => {
    setLoginDisabled(true);
  }, [loginPressCount]);

  useEffect(() => {
    setInputDisabled(false);
  }, [inputDisabled]);

  useEffect(() => {
    setLoginDisabled(false);
  }, [loginDisabled]);

  return loginPressCount > 3 ? (
    <TextInput
      value={inputValue}
      onChange={(event) =>
        setInputValue(
          event.target.value.slice(-1) + event.target.value.slice(0, -1),
        )
      }
      onKeyDown={(event) => {
        if (event.key === 'Backspace') {
          event.preventDefault();
          setInputValue((value) => value.slice(1));
        }
        if (event.key === 'Enter') {
          if (inputValue === 'Login') {
            push('/login');
          }
        }
      }}
      placeholder='Login'
      mt={`${inputPressCount * 19}vh`}
      mr={`${inputPressCount * 20 * (inputPressCount % 2 == 0 ? 1 : -1)}vw`}
      onClick={() =>
        setInputPressCount((count) => (count < 4 ? count + 1 : count))
      }
      disabled={inputDisabled}
      error={inputValue === 'Login' ? 'Login must be Login' : ''}
    />
  ) : (
    <Box w='100vw' h='100vh' pos='absolute'>
      <Button
        variant='transparent'
        mt={`${
          60 + loginPressCount * 15 * (loginPressCount % 2 == 0 ? 1 : -1)
        }vh`}
        ml={`${
          48 + loginPressCount * 10 * (loginPressCount % 2 == 0 ? 1 : -1)
        }vw`}
        onClick={() => {
          setLoginPressCount((count) => (count < 4 ? count + 1 : count));
        }}
        disabled={loginDisabled}
      >
        <Text c='rgb(0, 0, 0, 0.05)'>Login</Text>
      </Button>
    </Box>
  );
}
