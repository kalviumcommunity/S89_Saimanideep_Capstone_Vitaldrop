import '../components/HomePage.css'
import React from 'react'
import NavBar from './NavBar'
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
    const navigate = useNavigate();
    return (
        <div className="app-container">
          <NavBar className='navbar-home' showContact={true}></NavBar>
          <main className="hero-section">
            <div className="hero-content">
              <h2 className="tagline">
                <span style={{whiteSpace:"nowrap"}}>Every <span className="highlight">drop</span> counts, </span><br/>
                <span style={{whiteSpace:"nowrap"}}>Every <span className="highlight">donor</span> matters,</span><br/>
                <span style={{whiteSpace:"nowrap", marginLeft: "-2rem"}}>Be the lifeline with "<span className="vital-text">Vital</span><span className="drop-text">Drop</span>"!</span>
              </h2>
              <button className="donate-button" onClick={() => navigate('/form')}>Donate now</button>
            </div>
          </main>
        </div>
      )
}

export default HomePage
