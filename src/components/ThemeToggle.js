import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggler = () => {
    const { toggleTheme } = useContext(ThemeContext)
    return (
        <button onClick={toggleTheme}>Toggle</button>
    );
}
 
export default ThemeToggler;