import React, { createContext, useState, ReactNode } from 'react';

type InputContextType = {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
};

export const InputContext = createContext<InputContextType>({
  inputValue: '',
  setInputValue: () => {},
});

type InputProviderProps = {
  children: ReactNode;
};

export const InputProvider: React.FC<InputProviderProps> = ({ children }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <InputContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </InputContext.Provider>
  );
};