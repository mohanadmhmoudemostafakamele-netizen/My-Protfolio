import React from 'react';
import './home.css';
import Me from '../../assets/me.png';
import CV from '../../assets/cv.pdf';
import HomeSocials from './HomeSocials';

function Home() {
  return (
    <section className='home'> 
      <div className="container home_container">
        <h4>Hello I'm</h4>
        <h1>Mohanad Mhmoude mostafa</h1>
        <h4 className='text-light'>Frontend & AI Developer</h4>

        <div className="btns">
          <a href= {CV} className='btn'  download >Download CV</a>
          <a href="#contact" className='btn btn-primary'>Lets talk</a>
        </div>

        <div className="me">
          {/* تم إضافة وصف للصورة في alt */}
          <img src={Me} alt="Mohanad Mhmoude" />
          

        </div>
        <a href="#about" className='scroll_down'>Scroll Down</a>

        
           <HomeSocials></HomeSocials>   
      </div>

    </section>
  );
}

export default Home;