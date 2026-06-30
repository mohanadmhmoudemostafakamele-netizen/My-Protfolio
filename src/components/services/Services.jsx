import React from 'react';
import './services.css';
import { MdDesignServices } from 'react-icons/md';
import { IoIosRocket } from 'react-icons/io';
import { FaCode } from 'react-icons/fa';

function Services() {
  return (
    <section id='services'>
      <div className="top_section">
        <h5>What I Offer</h5>
        <h2>Services</h2>
      </div>

      <div className="container container_services">
        {/* خدمة تصميم المواقع */}
        <article className='card'>
          <MdDesignServices className='icon' />
          <h3>Web Design</h3>
          <p className='text-light'>
            I create modern and engaging user interfaces focused on providing a seamless experience that aligns with your brand identity.
          </p>
        </article>

        {/* خدمة الأداء السريع */}
        <article className='card'>
          <IoIosRocket className='icon' />
          <h3>Fast Performance</h3>
          <p className='text-light'>
            I focus on optimizing your website's loading speed to ensure a superior browsing experience, helping with user retention and SEO rankings.
          </p>
        </article>

        {/* خدمة الكود النظيف */}
        <article className='card'>
          <FaCode className='icon' />
          <h3>Clean Code</h3>
          <p className='text-light'>
            I write organized, maintainable, and scalable code, strictly adhering to best programming practices to ensure project stability.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Services;