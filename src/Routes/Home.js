import HomePage from './image/logo/HomePage.png';
import './css/App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("/option1");


    return (
       /* STATIC BAR */

       <div className="App">
        <div className="Hitbox2"
        onClick={() => navigate('/')}
        >
          My hit box
        </div>
        <div className="sidebar">
            <div
              className={`sidebar-option ${mode === '/option1' ? 'active' : ''}`}
              onClick={() => navigate('/Naming')}
            >

            </div>
            
            <div
              className={`sidebar-option ${mode === '/option3' ? 'active' : ''}`}
              onClick={() => navigate('/Rep')}
            >
              
              <span></span>
            </div>
            <div
              className={`sidebar-option ${mode === '/option4' ? 'active' : ''}`}
              onClick={() => navigate('/Comprehension')}
            >
            
            </div>
            <div
              className={`sidebar-option ${mode === '/option2' ? 'active' : ''}`}
              onClick={() => navigate('/Speech')}
            >
         
            </div>

          </div>

        <img src={HomePage}  alt="UGBN" className="Mockup" />

        

        </div>
        
  

    );
  }

  
export default Home;

