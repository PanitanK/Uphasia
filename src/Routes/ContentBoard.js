import React from 'react';
import { useState , useEffect } from 'react';

import HomeMode from './HomeComp';
import ReqMode from './Req'
import ResearchMode from './Research'
import PartnerMode from './Partners'
import MarketMode from './Market'

function ContentBoard( mode ) {

  const [ Currmode , setCurrmode] = useState(null);

  useEffect(() => {
    setCurrmode(mode); // Update CurrMode when mode changes
  }, [mode]);

  switch (Currmode) {
    case '/option1':
      return <HomeMode  />;
    case '/option2':
      return <ReqMode  />;
    case '/option3':
      return <ResearchMode />;
    case '/option4':
      return <PartnerMode />;
    case '/option5':
      return <MarketMode />;


    default:
      return null; // Render null for unknown modes
  }
}

export default ContentBoard;
