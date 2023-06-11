import React from "react";
import { Button } from '@mui/material';

type ButtonProps = {
    onClick: () => void;
    text: string;
};

const ButtonComponent: React.FC<ButtonProps> = ({onClick, text}) => {
  return (
      <Button variant="contained" color="primary" onClick={onClick}>
        Click Me
      </Button>
  );
};

export default ButtonComponent ;