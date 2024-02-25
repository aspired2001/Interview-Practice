import React, { useContext } from 'react';
import { userData } from '../contexts/GlobalContext';
import settings from './settings';

const Home = () => {
    // Destructure the context value (which is an array in this case)
    let {name}=useContext(userData)

    return (
        <div>
            <h1>The name is {name}</h1>
            <settings />
        </div>
    );
};

export default Home;
