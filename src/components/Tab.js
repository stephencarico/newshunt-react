import React from 'react'
import PropTypes from 'prop-types'

const Tab = ({ active, children, onClick }) => (
    <li
      className={ "tab" + ( active ? " active" : "") }
      onClick={onClick}
      disabled={active}
    >
      {children}
    </li>
)

Tab.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool,
  children: PropTypes.string.isRequired
}

export default Tab