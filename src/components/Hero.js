import React from 'react';

export default function Hero() {
  return (
    <section className='hero'>
      <div className='hero-header'>
        <p className='hero-small-heading '>Hi, I'am</p>
        <h1 className='hero-big-heading'>Varun Tiwari,</h1>
        <h1 className='hero-big-heading secondry-big-heading'>I'm a </h1>
        <p className='hero-desc'>
          My name is Varun Tiwari, I'm a student at ABV-IIITM, Gwalior.
          Currently, I am pursuing an Integrated B.Tech and M.Tech in
          Information Technology. Additionally, I am an experienced Full-Stack
          Web Developer, I build websites from the ground up.
        </p>
      </div>
      <a href='#projects'>
        <button className='hero-btn primary-btn'>
          <p>Check my projects !</p>
        </button>
      </a>
    </section>
  );
}
