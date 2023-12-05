import Speech1 from './image/logo/Speech1.png';
import './css/App.css';

import { useNavigate } from 'react-router-dom';


function Speech() {
  const navigate = useNavigate();
 


    return (
       /* STATIC BAR */

       <div className="App">
        <div className="Hitbox"
        onClick={() => navigate('/')}
        >
          My hit box
        </div>


        <img src={Speech1}  alt="UGBN" className="Mockup" />

        

        </div>
        
  

    );
  }

  
export default Speech;

