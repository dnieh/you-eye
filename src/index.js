import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Screen from './components/screen'
import Button from './components/button'
import Modal from './components/modal'
import './styles/styles.scss'

class SampleSite extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
    }
  }

  onOpenModal() {
    this.setState({ showModal: true });
  }
  
  onCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.showModal}
          onRequestClose={this.onCloseModal.bind(this)}
        >
          <h3 className='m-b-30'>Modal Title</h3>
          <div className='close-button' onClick={this.onCloseModal.bind(this)}>✕</div>
          <div className='input'>
            <label>Input Label</label>
            <input type='text' placeholder='Placeholder Text' />
          </div>
          <div className='input m-b-50'>
            <label>Textarea Label</label>
            <textarea type='text' placeholder='Placeholder Text' />
          </div>
          <div className='button-group right'>
            <Button
              text='Close'
              onClick={this.onCloseModal.bind(this)}
            />
            <Button
              className='action'
              text='Submit'
              onClick={this.onCloseModal.bind(this)}
            />
          </div>
        </Modal>
        <Screen className='center home-landing'>
          <div className='link'>Link</div>
          <h1 className='logo m-b-10'>YOU EYE QUEUE</h1>
          <h3 className='m-b-50'>Less is more until it isn't, and then it's still less.</h3>
          <Button
            className='outline'
            text='Show Modal'
            onClick={this.onOpenModal.bind(this)}
          />
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
