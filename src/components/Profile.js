import React from 'react'
import { useContext } from 'react';
import { userData } from '../contexts/GlobalContext';

export default function Profile() {
    let { setName } = useContext(userData);

  return (
    <>

    <button onClick={()=>setName("Kahan Hai kahan")}>Change the name</button>
    </>
  )
}
