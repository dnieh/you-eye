import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const Button = (props) => {
  return (
    <button
      className={cx('button', props.className)}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  onClick: () => {},
}

export default Button
