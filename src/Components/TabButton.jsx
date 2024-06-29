import React from 'react'

function TabButton({label, onSelect}) {
  
  return (
    <div>
      <button onClick={onSelect}>{label}</button>
    </div>
  )
}

export default TabButton
