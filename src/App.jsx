import logo from '../src/assets/images/logo.svg'
import Card from './components/card'
import { dataTrip } from './mock/data'
import './App.css'
function App() {

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
        {dataTrip.map(element => (
          <Card data={element}/>
        ))}
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
