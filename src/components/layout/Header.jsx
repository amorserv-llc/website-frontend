import React from 'react'
import home from "../../Assets/home.png";
export default function 

() {
  return (
    <header className='header-bg'>
        <div className="header">
              <div className="content">
                  <h1>
                    We're your Partner for Digital Marketing Success
                  </h1>
                  <p>Empower Your Brand, and Drive Results with AmorServ Consulting</p>
                  <a href=""><button>Get Expert</button></a>
              </div>
              <div className="image">
                  <img src={home} className="img-fluid" alt="header-image" />
              </div>
          </div>
        
    </header>
  )
}
