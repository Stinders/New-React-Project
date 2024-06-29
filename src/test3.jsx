import { React, useState } from "react";

// IMPORTANT:
// In this Udemy environment, you CAN'T import & use useState like this:
// import { useState } from 'react'
// Instead, import & use it like this:
// import React from 'react';
// React.useState(...)

// don't change the Component name "App"
export default function App() {
  const [deleteConfirmed, setDeleteConfirmed] = useState(false);
  function deleteHandler() {
    setDeleteConfirmed(true);
  }
  function proceedHandler() {
    setDeleteConfirmed(false);
  }
  return (
    <div>
      {!deleteConfirmed && <div data-testid="alert" id="alert">
        <h2>Are you sure?</h2>
        <p>These changes can't be reverted!</p>
        <button onClick={proceedHandler}>Proceed</button>
      </div>}
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
}
