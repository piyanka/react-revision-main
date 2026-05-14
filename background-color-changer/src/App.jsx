import { useState } from 'react'
import Button from './components/Button'
function App() {
  const [Color, setColor] = useState('white');

  const handleClick = (color) => {
    setColor(color);

  }
  return (
    <>
      <div >
        <div className='w-screen h-screen' style={{ backgroundColor: Color}}> 
            <div className='fixed bottom-7 flex flex-row gap-4 justify-items-center bg-slate-500'  style={{padding: 12, borderRadius: 47, marginLeft: 300}}> 
              
              <button 
              onClick={() => handleClick('red')} 
              className='bg-red-800 rounded-2xl px-4 py-2 font-bold'
              > RED</button>
              <button 
              onClick={() => handleClick('pink')} 
              className='bg-pink-500 rounded-2xl px-4 py-2 font-bold'
              >PINK</button>
              <button onClick={() => handleClick('yellow')} 
              className='bg-yellow-500 rounded-2xl px-4 py-2 font-bold'
              >YELLOW</button>
              <button 
              onClick={() => handleClick('purple')} 
              className='bg-purple-700 rounded-2xl px-4 py-2 font-bold'
              >PURPLE</button>
              <button onClick={() => handleClick('lavender')} 
              className='bg-orange-500 rounded-2xl px-4 py-2 font-bold'
              >ORANGE</button>
              
              <button onClick={() => handleClick('olive')} 
              className='bg-violet-900 rounded-2xl px-4 py-2 font-bold'
              >VOILET</button>
              
              <button onClick={() => handleClick('plum')} 
              className='bg-green-700 rounded-2xl px-4 py-2 font-bold'
              >GREEN</button>
              <button onClick={() => handleClick('brown')} 
              className='bg-blue-700 rounded-2xl px-4 py-2 font-bold'
              >BROWN</button>
              


            </div>
        </div>
      </div>
    </>
  )
}

export default App
