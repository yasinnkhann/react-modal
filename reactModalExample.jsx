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
            <div className="closedPanel">
              <button 
              onClick={() => this.togglePanel()}>
                Open modal
              </button>
            </div>
          ): 
          <div className="openPanel">
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
