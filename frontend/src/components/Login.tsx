import { Flex, Button, Text, TextInput } from '@mantine/core';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Login() {
  const [loginPressed, setLoginPressed] = useState(false);
  const [inputPressCount, setInputPressCount] = useState(0);
  const [inputDisabled, setInputDisabled] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const { push } = useRouter();

  useEffect(() => {
    setInputDisabled(true);
  }, [inputPressCount]);

  useEffect(() => {
    setInputDisabled(false);
  }, [inputDisabled]);

  return (
    <Flex direction='column'>
      {loginPressed ? (
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
                console.log('HELLO');
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
        <Button
          color='rgb(208, 214, 181)'
          onClick={() => setLoginPressed(true)}
        >
          <Text c='rgb(208, 214, 181)'>Login</Text>
        </Button>
      )}
    </Flex>
  );
}
