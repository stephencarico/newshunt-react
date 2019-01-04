import React from 'react'

const Tab = ({ onClick, active, children }) => (
    <li
      className="tab"
      onClick={onClick}
      disabled={active}
    >
      {children}
    </li>
)

export default Tab