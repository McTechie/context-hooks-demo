import { Component, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';

// Accessing Context using Consumer approach
// This method works with Functional Components too

// class Navbar extends Component {
//     render() {
//         return (
//             <AuthContext.Consumer>{(authContext) => (
//                 <ThemeContext.Consumer>{(themeContext) => {
//                     const { isLightTheme, light, dark } = themeContext;
//                     const { isAuthenticated, toggleAuth } = authContext;
//                     const theme = isLightTheme ? light : dark;
//                     return (
//                         <nav style={{ background: theme.ui, color: theme.fontColor }}>
//                             <h1>Context App</h1>
//                             <div style={{ cursor: 'pointer' }} onClick={toggleAuth}>
//                                 {isAuthenticated ? 'Logged in' : 'Logged out'}
//                             </div>
//                             <ul>
//                                 <li>Home</li>
//                                 <li>About</li>
//                                 <li>Contact</li>
//                             </ul>
//                         </nav>
//                     )
//                 }}</ThemeContext.Consumer>
//             )}</AuthContext.Consumer>
//         );
//     }
// }

// Using the useContext hook for multiple contexts

const Navbar = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const { isAuthenticated, toggleAuth } = useContext(AuthContext);
    const theme = isLightTheme ? light : dark;

    return (
        <nav style={{ background: theme.ui, color: theme.fontColor }}>
            <h1>Context App</h1>
            <div style={{ cursor: 'pointer' }} onClick={toggleAuth}>
                {isAuthenticated ? 'Logged in' : 'Logged out'}
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

export default Navbar;