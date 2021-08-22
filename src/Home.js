import React, { useState } from 'react';
import './home.css';

function Home() {

  const [activePanel, setActivePanel] = useState(1);

  const email = localStorage.getItem("email");
  const togglePanel = (panelId) => {
    setActivePanel(panelId);
  }

  return (
    <div className="d-flex container">

      <div
        className={`panel ${activePanel === 1 ? 'active' : ''}`}
        onClick={() => togglePanel(1)} >
        <h3>The Astros have 1 world series title</h3>
      </div>
      <div className={`panel ${activePanel === 2 ? 'active' : ''}`} onClick={() => togglePanel(2)} >
        <h3>The recorded speed of the fastest baseball pitch ever thrown is 105.1 mph (169.14 km/h). --Aroldis Chapman (NYY)</h3>
      </div>
      <div className={`panel ${activePanel === 3 ? 'active' : ''}`} onClick={() => togglePanel(3)} >
        <h3>The oldest baseball park still in use is Fenway Park, the home field of the Boston Red Sox, which debuted in 1912.</h3>
      </div>
      <div className={`panel ${activePanel === 4 ? 'active' : ''}`} onClick={() => togglePanel(4)} >
        <h3>Baseball fans ate 21,357,316 hot dogs and 5,508,887 sausages during the 2014 major league season. That is enough hot dogs to stretch from Dodger Stadium in LA to Wrigley Field in Chicago.</h3>
      </div>
      <div className={`panel ${activePanel === 5 ? 'active' : ''}`} onClick={() => togglePanel(5)} >
        <h3>The longest MLB game in terms of time lasted for 8 hours and 6 minutes. (CWS v MIL 1984</h3>
      </div>
    </div>
  )
}


export default Home;
