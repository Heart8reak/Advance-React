import React from 'react'
import useDarkMode from '../hooks/useDarkMode'

const darkKey = true
const darkInitial = 'isDM'

const Navbar = () => {
    const [darkMode, toggleDarkMode] = useDarkMode(darkKey, darkInitial)

    return (
        <nav className='navbar'>
            <h3>Most Googled Searches</h3>
            <div className="dark-mode__toggle">
                <div 
                onClick={toggleDarkMode}
                className={darkMode ? 'toggle toggled' : 'toggle'}
                ></div>
            </div>
        </nav>
    )
}

export default Navbar