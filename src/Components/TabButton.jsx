import React from 'react'

function TabButton({label, onSelect, isSelected}) {
  
  return (
    <div>
      <button className={isSelected ? 'active' : ''}onClick={onSelect}>{label}</button>
    </div>
  )
}

export default TabButton
