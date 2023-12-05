import Naming1 from './image/logo/Naming1.png';
import './css/App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Naming() {
  const navigate = useNavigate();
 


    return (
       /* STATIC BAR */

       <div className="App">
        <div className="Hitbox"
        onClick={() => navigate('/')}
        >
          My hit box
        </div>

        <img src={Naming1}  alt="UGBN" className="Mockup" />

        

        </div>
        
  

    );
  }

  
export default Naming;

