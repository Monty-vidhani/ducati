import React from 'react'
import Div2 from './components/Div2'
import Div1 from './components/Div1'

const DucatiHero = () => {
  return (
    <div className="h-screen w-screen flex flex-col xl:flex-row justify-center items-center">
        <Div1 />
        <Div2 />
    </div>
  )
}

export default DucatiHero