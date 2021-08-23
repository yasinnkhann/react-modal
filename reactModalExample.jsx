import React from 'react';
import Modal from 'react-modal';

class ReactModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    }
  }
  
  togglePanel = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen })
  }
    
  render() {
    return (
      <div>  
          {this.state.isModalOpen === false ? (
            <div className="closedModal">
              <button 
              onClick={() => this.togglePanel()}>
                Open modal
              </button>
            </div>
          ): 
          <div className="openModal">
          <Modal 
          isOpen={this.state.isModalOpen}
          onRequestClose={() => this.togglePanel()}
          ariaHideApp={false}
          style={
            {
              overlay: {
                backgroundColor: 'grey'
              },
              content: {
                color: 'orange'
              }
            }
          }
          >
            <h2>Modal Title</h2>
            <p>Modal Body</p>
            <button 
              onClick={() => this.togglePanel()}>
                Close Modal
            </button>
          </Modal>
          </div>}
    </div>
    );
  }
}

export default ReactModal;

// React Hooks Version:

import React, { useState } from 'react';
import Modal from 'react-modal';

const ReactModal = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);  
  
  const togglePanel = () => {
    setIsModalOpen(!isModalOpen);
  };
    
    return (
      <div>  
          {isModalOpen === false ? (
            <div className="closedModal">
              <button 
              onClick={() => togglePanel()}>
                Open modal
              </button>
            </div>
          ): 
          <div className="openModal">
          <Modal 
          isOpen={isModalOpen}
          onRequestClose={() => togglePanel()}
          ariaHideApp={false}
          style={
            {
              overlay: {
                backgroundColor: 'grey'
              },
              content: {
                color: 'orange'
              }
            }
          }
          >
            <h2>Modal Title</h2>
            <p>Modal Body</p>
            <button 
              onClick={() => togglePanel()}>
                Close Modal
            </button>
          </Modal>
          </div>}
    </div>
    );
};

export default ReactModal;
