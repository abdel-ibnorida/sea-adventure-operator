import { useState } from 'react'
import { dataTrip, shuffledData, listDeparturePort } from './mock/data'
import logo from '../src/assets/images/logo.svg'
import Card from './components/card'
import './App.css'


function App() {
  const [showAllCardSection, setShowAllCardSection] = useState(true);
  const [numCardsShowed, setNumCardsShowed] = useState(8);
  const [portListToShow, setPortListToShow] = useState('');

  const onHandleShowMore = () => {
    if (dataTrip.length - numCardsShowed > 8) {
      setNumCardsShowed(prev => prev + 8);
    }
    else {
      console.log('ho fatto questo:', dataTrip.length - numCardsShowed);
      setNumCardsShowed(dataTrip.length)
    }
  }
  const onHandleSelectView = (e) => {
    setShowAllCardSection(e.target.value === "true" ? true : false);
  }
  const onHandlePortSelect = (e) => {
    setShowAllCardSection(false);
    setPortListToShow(e.target.value);
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


      <div>
        <select onChange={onHandleSelectView}>
          <option value={true}>Mostra tutti</option>
          <option value={false}>Mostra per porto di porto di partenza</option>
        </select>
      </div>
      <div>
        <select onChange={onHandlePortSelect} >
          {listDeparturePort.map(el => (
            <option value={el}>{el}</option>
          ))}
        </select>
      </div>

      {
        showAllCardSection ?
          <div className='cards_list'>
            {
              dataTrip.slice(0, numCardsShowed).map(element => (
                <Card data={element} />
              ))
            }
            {numCardsShowed >= dataTrip.length ? '' : <button className='show_more_btn' onClick={onHandleShowMore}>Mostra altri</button>}
          </div >
          :
          portListToShow !== '' ?
            <div className='cards_list'>
              {dataTrip.filter(el => el.departure.Port === portListToShow).map(element => <Card data={element} />)}
            </div>
            :
            <div className='cards_list_group'>
              {
                listDeparturePort.map((element => (
                  <>
                    <div className='name_port_group'>{element}</div>
                    <div className='cards_list'>
                      {dataTrip.filter(trip => trip.departure.Port === element).map(el => <Card data={el} />)}
                    </div>
                  </>

                )))
              }
            </div>

      }
      <div className='banner'>
        <div className='banner_overlay'>
          <h1>+20 Destinazioni</h1>
          <h1>+15 Imbarcazioni</h1>
          <h1>+40 Itinerari</h1>
        </div>
      </div>
      <div className='ranomd_cards_section'>
        <h2>Avventure da scoprire</h2>
        <div className='cards_list'>
          {
            shuffledData.slice(0, 8).map(element => (
              <Card data={element} />
            ))}
        </div>
      </div>
      <div className='footer'></div>
    </>
  )
}

export default App
