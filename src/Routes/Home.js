
import HomePage from './image/logo/HomePage.png';
import './css/App.css';
import { useState } from 'react';



function Home() {
  //var fetchcount = 0;   

 

  const [mode, setMode] = useState("/option1");


  //  <ContentBoard mode={mode} userData={userData} plotDocuments={plotDocuments} />

  
  const handleMode = (USERMode) => {
    setMode(USERMode);
  };
  
  

  

  
  


    return (
       /* STATIC BAR */
       <div className="App">
        <img src={HomePage}  alt="UGBN" className="Mockup" />
       
  
        <div className="Dashboard">
          <div className="sidebar">
            <div
              className={`sidebar-option ${mode === '/option1' ? 'active' : ''}`}
              onClick={() => handleMode('/option1')}
            >
              <img src={null} alt="UGBN" className="IconClass" />
              <span>Home</span>
            </div>
            
            <div
              className={`sidebar-option ${mode === '/option3' ? 'active' : ''}`}
              onClick={() => handleMode('/option3')}
            >
              <img src={null} alt="UGBN" className="IconClass" />
              <span>Research</span>
            </div>
            <div
              className={`sidebar-option ${mode === '/option4' ? 'active' : ''}`}
              onClick={() => handleMode('/option4')}
            >
              <img src={null} alt="UGBN" className="IconClass" />
              <span>Partners</span>
            </div>
            <div
              className={`sidebar-option ${mode === '/option2' ? 'active' : ''}`}
              onClick={() => handleMode('/option2')}
            >
              <img src={null} alt="UGBN" className="IconClass" />
              <span>Request</span>
            </div>
            <div
              className={`sidebar-option ${mode === '/option5' ? 'active' : ''}`}
              onClick={() => handleMode('/option5')}
            >
              <img src={null} alt="UGBN" className="IconClass" />
              <span>Pricing</span>
            </div>
          </div>
        </div>
  

      </div>
    );
  }

  
export default Home;

