import { useState, useRef } from 'react';
import { FormControl, FormLabel, IconButton, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { HiEye, HiEyeOff } from 'react-icons/hi';

const PasswordField = ({value, handleFormChange}) => {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  const onClickReveal = () => {
    setIsOpen(!isOpen);
    if (inputRef.current) {
      inputRef.current.focus({ preventScroll: true });
    }
  };

  return (
    <FormControl>
      <FormLabel htmlFor="password">Password</FormLabel>
      <InputGroup>
        <InputRightElement>
          <IconButton
            variant="text"
            aria-label={isOpen ? 'Mask password' : 'Reveal password'}
            icon={isOpen ? <HiEyeOff /> : <HiEye />}
            onClick={onClickReveal}
          />
        </InputRightElement>
        <Input
          id="password"
          ref={inputRef}
          name="password"
          type={isOpen ? 'text' : 'password'}
          autoComplete="current-password"
          required
          value={value}
          onChange={handleFormChange}
        />
      </InputGroup>
    </FormControl>
  );
};

export default PasswordField;
