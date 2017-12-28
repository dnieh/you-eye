import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const Button = (props) => {
  return (
    <button className={cx('button', props.className)} >
      {props.text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
}

export default Button
