import React, {useContext} from 'react';
import ButtonComponent  from '../../components/Button/Button';
import InputComponent  from '../../components/Input/Input';
import { InputContext } from '../../contexts/InputContext';
import MoviesComponent from '../../components/Movies/Movies';

const Home:React.FC = () => {
    const { inputValue } = useContext(InputContext);

    const handleClick = () => {
    alert(`Input value: ${inputValue}`);
    };
    
    return (
        <div>
          <h1>Home</h1>
          <InputComponent />
          <ButtonComponent onClick={handleClick} text="Submit" />
          <MoviesComponent/>
        </div>
    );
};

export default Home;