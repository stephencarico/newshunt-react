import React from 'react'
import PropTypes from 'prop-types'

const Tab = ({ onClick, active, children }) => (
    <li
      className="tab"
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