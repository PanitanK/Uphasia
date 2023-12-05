import HomePage from './image/logo/HomePage.png';
import './css/App.css';

import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();



    return (
       /* STATIC BAR */

       <div className="App">
        <div className="Hitbox2"
        onClick={() => navigate('/Dashboard')}
        >
          My hit box
        </div>

        <div className="Hitbox3"
        onClick={() => navigate('/Rep')}
        >
          My hit box
        </div>
        <div className="sidebar">
            <div
              className={`sidebar-option `}
              onClick={() => navigate('/Naming')}
            >

            </div>
            <div
              className={`sidebar-option `}
              onClick={() => navigate('/Rep')}
            >
              
              <span></span>
            </div>
            <div
              className={`sidebar-option `}
              onClick={() => navigate('/Comprehension')}
            >
            
            </div>
            <div
              className={`sidebar-option `}
              onClick={() => navigate('/Speech')}
            >
         
            </div>

          </div>

        <img src={HomePage}  alt="UGBN" className="Mockup" />

        

        </div>
        
  

    );
  }

  
export default Home;

