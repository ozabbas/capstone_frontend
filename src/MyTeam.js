import React from 'react';

function MyTeam() {

  const email = localStorage.getItem("email");
  const userID = localStorage.getItem("userID");

  return (
    <>
      <h1>My Team</h1>
      <h2>{email}</h2>
    </>
  )
}


export default MyTeam;
