import React from 'react';

function Home() {

  const email = localStorage.getItem("email");

  return (
    <>
      {email && <h1>You're logged in as {email}</h1>}

    </>
  )
}


export default Home;
