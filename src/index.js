import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './styles/styles.scss'

class SampleSite extends Component {
  render() {
    return (
      <div>
        <h2 className='logo'>typography logo</h2>
        <h1>h1 H1 Heading</h1>
        <h2>h2 H2 Heading</h2>
        <h3>h3 H3 Heading</h3>
        <p>
          Paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
      </div>
    )
  }
}

const mountNode = document.getElementById('app')
ReactDOM.render(
  <SampleSite />,
  mountNode
)
