import Title from './image/logo/TitleCB.png';
import './css/App.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import UserIcon from "./image/svg/person.png"

import { Link } from "react-router-dom";

import ContentBoard from './ContentBoard';

function Home() {
  //var fetchcount = 0;
  const location = useLocation();
 

  const [mode, setMode] = useState("/option1");


  //  <ContentBoard mode={mode} userData={userData} plotDocuments={plotDocuments} />

  
  const handleMode = (USERMode) => {
    setMode(USERMode);
  };
  
  

  

  
  


    return (
       /* STATIC BAR */
       <div className="App">
       <div className="static-bar">
       <div className="left-content">
         <Link to="/">
           <img className="title-image" src={Title} alt="Title" />
         </Link>
       </div>
       <div className="green-box2">
         <img src={UserIcon} alt="UGBN" className="UserIcon" />
         <h1 className="green-box-text2"> ศร แสนสิริ</h1>
       </div>
     </div>
  
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
  
        <div className="ContentBoard">
        
          <ContentBoard mode = {mode} />
        </div>
      </div>
    );
  }

  
export default Home;

