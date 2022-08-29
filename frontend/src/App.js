import React, {useEffect, useState} from 'react';
import './app.css';
import HeroSection from './components/HeroSection';
import Modal from './components/AppModal';
import QuickCardContainer from './components/QuickCardContainer';
import RestaurantLists from './components/RestaurantLists';

const locationData = [
  {
    id: 1,
    city: 'New Delhi',
    location : ['Mathura Road, New Delhi', 'Khan Market, New Delhi', 'Greater Kailash, New Delhi', 'Rohini, New Delhi']
  },
  {
    id: 2,
    city: 'Jabalpur',
    location : ['Sadar, Jabalpur', 'Napier Town, Jabalpur', 'Karad, Jabalpur', 'Madanmahal, Jabalpur']
  }
]

const App = () => {

  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState(null);
  const [location, setLocation] = useState(null);
  const [places, setPlaces] = useState(null);

  const handleClick = (id) => {
    if (id === 'login') {
      setModalTitle('Login');
      setShowModal(true);
    } else {
      setModalTitle('Signup');
      setShowModal(true);
    }
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  useEffect(() => {
    if (location) {
      locationData.map(data => {
        if(location.toLowerCase() == data.city.toLowerCase()) {
          setPlaces(data.location)
        } else {
          console.log('Not found');
        }
      })
    }
  }, [location])
  
  return (
    <>
    <div className='container'>
      {/* <HeroSection  handleClick={handleClick} setLocation={setLocation} places={places}/>
      <QuickCardContainer />
      <Modal showModal={showModal} handleCloseModal={handleCloseModal} title={modalTitle} /> */}
      <RestaurantLists />
    </div>
    
    </>
  )
}

export default App;
