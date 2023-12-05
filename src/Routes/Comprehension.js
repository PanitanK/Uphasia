import Comprehension1 from './image/logo/Comprehension1.png';
import './css/App.css';

import { useNavigate } from 'react-router-dom';


function Comprehension() {
  const navigate = useNavigate();
 


    return (
       /* STATIC BAR */

       <div className="App">
        <div className="Hitbox"
        onClick={() => navigate('/')}
        >
          My hit box
        </div>

        <img src={Comprehension1}  alt="UGBN" className="Mockup" />


        </div>
    );
  }

  
export default Comprehension;

