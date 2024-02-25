
import React, { useContext } from 'react';
import { userData } from '../contexts/GlobalContext';

export default function settings() {
    let {name}=useContext(userData);
  return (
    <div>
        <h1>Settings</h1>
    </div>
  )
}
