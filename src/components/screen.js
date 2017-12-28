import React from 'react'
import cx from 'classnames'

const Screen = (props) => {
  return (
    <div className={cx('screen', props.className)}>
      {React.Children.toArray(props.children)}
    </div>
  )
}

export default Screen
