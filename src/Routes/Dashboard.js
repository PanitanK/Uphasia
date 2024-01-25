import Dashboard from './image/logo/Dashboard.png';
import './css/App.css';

import { useNavigate } from 'react-router-dom';


function Naming() {
  const navigate = useNavigate();
 


    return (
       /* STATIC BAR */

       <div className="App">
        <div className=""
        onClick={() => navigate('/')}
        >
          My hit box
        </div>

        

        

        </div>
        
  

    );
  }

  
export default Naming;

