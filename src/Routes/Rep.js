import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Kaprow from './image/Data/Examplevoice.m4a';
import Rep1 from './image/logo/Rep1.png';
import Rep2 from './image/logo/Rep2.png';

function Rep() {
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(Rep1);

  const handleButtonClick = () => {
    // Play the Kaprow audio file when the button is clicked
    audioRef.current.play();
  
    // Wait for 3 seconds and then change the image source to Rep2
    setTimeout(() => {
      setImageSrc(Rep2);
    }, 2200); // 3000 milliseconds = 3 seconds
  };

  return (
    /* STATIC BAR */
    <div className="App">
      <div
        className="Hitbox"
        onClick={() => navigate('/')}
      >
        My hit box
      </div>

      <div
        className="Hitbox4"
        onClick={handleButtonClick}
      >
        My hit box
      </div>

      {/* Use dynamic image source */}
      <img src={imageSrc} alt="UGBN" className="Mockup" />

      {/* Audio Player without default controls */}
      <audio ref={audioRef}>
        <source src={Kaprow} type="audio/mp4" />
        Your browser does not support the audio tag.
      </audio>
    </div>
  );
}

export default Rep;
