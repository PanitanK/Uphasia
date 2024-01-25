
import './css/App.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { db } from './Firebase';
import {  collection, getDocs, doc, getDoc } from 'firebase/firestore';
import HomeIcon from './image/svg/Home.png';

import UserIcon from './image/svg/person.png';
import Title from './image/logo/Uphasia.png';
import { Link } from "react-router-dom";

import ContentBoard from './ContentBoard';

function Home() {
  //var fetchcount = 0;
  //const location = useLocation();
  //const userCollectionRef = collection(db, 'USERS');
  //const { userUID } = location.state || {};
  //const navigate = useNavigate();
  //const [userData, setUserData] = useState(null);
  //const [HasFetched, setFetch] = useState(false);
  const [mode, setMode] = useState("/option1");
  //const [plotDocuments, setplotDocuments] = useState([])

  //  <ContentBoard mode={mode} userData={userData} plotDocuments={plotDocuments} />

  
  const handleMode = (USERMode) => {
    setMode(USERMode);
  };
  /*
  const fetchPlotDocuments = async (userUID) => {
    const dataCollectionRef = collection(db, 'USERS', userUID, 'DataCollection');
  
    try {
      const querySnapshot = await getDocs(dataCollectionRef);
      const plotDocuments = querySnapshot.docs
        .filter((doc) => doc.id.startsWith('PlotNO_'))
        .map((doc) => doc.data());
        
      return plotDocuments;
    } catch (error) {
      console.error('Error fetching plot documents:', error);
      return [];
    }
  };
  */
 /* FETCH DATA UPON START*/
  /*useEffect(() => {
   
    const fetchData = async () => {
      try {
        const userDocRef = doc(userCollectionRef, userUID);
        const userDocSnapshot = await getDoc(userDocRef);
        if (userDocSnapshot.exists()) {
          const USERS_UID_SubCollection = collection(userDocRef, 'ProfileCollection');
          const USERS_UID_SubCollection_Snapshot = await getDocs(USERS_UID_SubCollection);
          const userData = USERS_UID_SubCollection_Snapshot.docs.map((doc) => doc.data());
          setUserData(userData);
        } else {
          console.log("User document does not exist.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }

      const plotDocuments = await fetchPlotDocuments(userUID);
      setplotDocuments(plotDocuments)
    };

*/
 



    return (
       /* STATIC BAR */
       <div className="App">
       <div className="static-bar">
       <div className="left-content">

       <Link to="/">
           <img className="title-image" src={Title} alt="Title"  onClick={() => handleMode('/585')} />
        </Link>
       </div>

       <div className="Middle-content">
        <h1>Message of The Day</h1>
       </div>
      <div className='right-content'>

       <div className="green-box2">
         <img src={UserIcon} alt="UGBN" className="UserIcon" />
         <h1 className="green-box-text2">Name EIEI</h1>
       </div>
      </div>

     </div>

        <div className="Dashboard">
          <div className="modetab">
            
        
            <div
              className={`sidebar-option ${mode === '/option3' ? 'active' : ''}`}
              onClick={() => handleMode('/option3')}
            >
              <span>การเรียกชื่อ Naming</span>
              
            </div>


            <div
              className={`sidebar-option ${mode === '/option4' ? 'active' : ''}`}
              onClick={() => handleMode('/option4')}
            >
            
              <span>การพูดตาม Repetition</span>
            </div>
            <div
              className={`sidebar-option ${mode === '/option2' ? 'active' : ''}`}
              onClick={() => handleMode('/option2')}
            >
             
              <span>ความเข้าใจ Comprehension</span>
            </div>
            <div
              className={`sidebar-option ${mode === '/option5' ? 'active' : ''}`}
              onClick={() => handleMode('/option5')}
            >
              
              <span>ความคล่องในการพูด Speech Fluency</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  
export default Home;

