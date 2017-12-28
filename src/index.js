import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Screen from './components/screen'
import './styles/styles.scss'

class SampleSite extends Component {
  render() {
    return (
      <div>
        <Screen>
          <h2 className='logo'>typography</h2>
          <h1>h1 H1 Heading</h1>
          <h2>h2 H2 Heading</h2>
          <h3>h3 H3 Heading</h3>
          <p>
            Paragraph: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </Screen>
        <Screen className='center'>
          <h1 className='logo'>tripseed</h1>
          <h3>Bring your trip ideas to fruition</h3>
        </Screen>
      </div>
    )
  }
}

const mountNode = document.getElementById('app')
ReactDOM.render(
  <SampleSite />,
  mountNode
)
