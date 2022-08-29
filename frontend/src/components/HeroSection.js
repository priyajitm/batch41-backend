import React, {useState} from 'react';
import Button from "./Button";

const HeroSection = ({handleClick, setLocation, places}) => {

    // const [location, setLocation] = useState(null);
    places && console.log('places in Hero Section', places)
    return (
        <div className="hero-section">
            <div className="btn-container">
                <Button title='Login' handleClick={() => handleClick('login')}/>
                <Button title='Create an account' size='md' isOutline={true} handleClick={() => handleClick('signup')}/>
            </div>
            
            <div className="content-wrapper">
                <div className="logo">e!</div>
                <h1>Find the best restaurants, cafes and bars</h1>
                <div className="searchbox" style={{display: 'flex', gap: '20px'}}>
                    <div>
                        <input type="text" placeholder="Please type a location" onChange={(e) => setLocation(e.target.value)}/>
                        <div></div>
                    </div>
                    <div>
                        <input type="text" placeholder="Search for restaurants" />
                        <div></div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default HeroSection;