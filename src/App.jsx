import React from 'react'
import Div2 from './components/Div2'
import Div1 from './components/Div1'

const App = () => {
  return (
 <div className="h-screen w-screen flex flex-col md:flex-row">
      {/* <div className="flex-1"> */}
        <Div1 />
      {/* </div> */}
      {/* <div className="flex-1"> */}
        <Div2 />
      {/* </div> */}
    </div>

  )
}

export default App