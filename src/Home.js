import React from 'react';

function Home() {

  const email = localStorage.getItem("email");

  return (
    <div className="container">
      {/* <div className="panel active" style="background-image: url('https://images.unsplash.com/photo-1559019857-d2d4ec3d6b92?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')">
        <h3>The Astros have 1 world series title</h3>
      </div>
      <div className="panel" style="background-image: url('https://images.unsplash.com/photo-1600116269531-22103b53f4b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60')">
        <h3>The recorded speed of the fastest baseball pitch ever thrown is 105.1 mph (169.14 km/h). --Aroldis Chapman (NYY)</h3>
      </div>
      <div className="panel" style="background-image: url('https://images.unsplash.com/photo-1591102600168-9ddf1b3329b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60')">
        <h3>The oldest baseball park still in use is Fenway Park, the home field of the Boston Red Sox, which debuted in 1912.</h3>
      </div>
      <div className="panel" style="background-image: url('https://images.unsplash.com/photo-1521914271965-8508b724e46b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60')">
        <h3>Baseball fans ate 21,357,316 hot dogs and 5,508,887 sausages during the 2014 major league season. That is enough hot dogs to stretch from Dodger Stadium in LA to Wrigley Field in Chicago.</h3>
      </div>
      <div className="panel" style="background-image: url('https://images.unsplash.com/photo-1554356871-37514f300eb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nzl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60')">
        <h3>The longest MLB game in terms of time lasted for 8 hours and 6 minutes. (CWS v MIL 1984</h3>
      </div> */}
    </div>
  )
}


export default Home;
