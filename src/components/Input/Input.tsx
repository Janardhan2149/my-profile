import React, { useContext } from 'react';
import './Input.css';
import { Input } from '@mui/material';
import { InputContext } from '../../contexts/InputContext';


const InputComponent : React.FC = () => {

  const { inputValue, setInputValue } = useContext(InputContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
    
  return (
    <Input
      color="primary"
      type="text"
      value={inputValue}
      onChange={handleChange}
    />
  );
};

export default InputComponent ;