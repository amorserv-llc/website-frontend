import React from 'react'
import homeimg from "../../Assets/homeimg.png";
export default function 

() {
  return (
    <header className='header-bg'>
        <div className="header">
              <div className="content">
                  <h1>
                    We're your Partner for Digital Marketing <br /> Success
                  </h1>
                  <p className='rapp' >Empower Your Brand, and Drive Results with AmorServ Consulting</p>
                  <a href=""><button>Get Expert</button></a>
              </div>
              <div className="image">
                
                  <img src={homeimg} className="img-fluid" alt="header-image" />
              </div>
          </div>
        
    </header>
  )
}
