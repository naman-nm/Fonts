import React, { useEffect, useState } from 'react';
import './Header.css'; 

// AnimatedText Component
function AnimatedText() {
  // State to manage the current displayed character
  const [currentD, setCurrentD] = useState(1);

  // useEffect to handle the interval for changing characters
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentD < 4) {
        // If currentD is less than 4, increment it, otherwise reset to 1
        setCurrentD(currentD + 1);
      } else {
        setCurrentD(1);
      }
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [currentD]);

  // Rendering the animated text with different fonts and styles
  return (
    <div className='main-animation'>
      <div className='text-animation'>
        <div className='font1'>
          <div className={`D${currentD}`}>
            <div className='animate-char'>D</div>
          </div>
        </div>
        <div className='font2'>R</div>
        <div className='font3'>A</div>
        <div className='font4'>F</div>
        <div className='font5'>
          <div className='animate-color-change'>T</div>
        </div>
        <div className='font6'>S</div>
        <div className='font7'>
          S
          <h3>S</h3>
          <h3>S</h3>
        </div>
      </div>
    </div>
  );
}

export default AnimatedText;
