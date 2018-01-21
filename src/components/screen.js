import React from 'react'
import cx from 'classnames'

const Screen = (props) => {
  return (
    <div className={cx('screen', props.className)}>
      <div className='inner-screen-container'>
        {React.Children.toArray(props.children)}
      </div>
    </div>
  )
}

export default Screen
