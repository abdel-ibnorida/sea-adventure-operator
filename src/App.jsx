import logo from '../src/assets/images/logo.svg'
import Card from './components/card'
import { dataTrip } from './mock/data'
import './App.css'
import { useState } from 'react'
function App() {
  const [numCardsShowed,setNumCardsShowed] = useState(8);
  const onHandleShowMore=()=>{
    if (dataTrip.length - numCardsShowed > 8) {
      setNumCardsShowed(prev => prev + 8);
    }
    else {
      console.log('ho fatto questo:', dataTrip.length - numCardsShowed);
      setNumCardsShowed(dataTrip.length)
    }
  }

  return (
    <>
      <div className='header'>
        <img src={logo} alt="" />
      </div>
      <div className='hero'>
        <div className='hero_overlay'>
          <h1>Lorem ipsum dolor, sit amet consectet.</h1>
        </div>
      </div>
      <div className='cards_list'>
        {dataTrip.slice(0,numCardsShowed).map(element => (
          <Card data={element}/>
        ))}
        {numCardsShowed>=dataTrip.length ? '' : <button className='show_more_btn' onClick={onHandleShowMore}>Mostra altri</button>}
      </div>
      <div className='banner'>
        <div className='banner_overlay'>
          <h1>+20 Destinazioni</h1>
          <h1>+15 Imbarcazioni</h1>
          <h1>+40 Itinerari</h1>
        </div>
      </div>
      <div className='footer'></div>
    </>
  )
}

export default App
