import React from 'react';

function Home() {

  const email = localStorage.getItem("email");

  return (
    <>
      {email && <h1>You're logged in as {email}</h1>}
      {/* <iframe src="https://giphy.com/embed/xUA7bfl3JCNxg14FYA" width="800" height="400" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/studiosoriginals-baseball-xUA7bfl3JCNxg14FYA"></a></p> */}
    </>
  )
}


export default Home;