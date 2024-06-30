import React from 'react';

// don't change the Component name "App"
export default function App(){

const [btnClicked, setBtnClicked]=React.useState(false);


function btnHandler(){
    setBtnClicked(btnClicked   => !btnClicked)
    }

    return (
        <div>
            <p className={btnClicked ? 'active' : undefined}>Style me!</p>
        <button onClick={btnHandler}>Toggle style</button>
        </div>
    );
}
