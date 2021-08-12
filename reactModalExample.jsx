import React from 'react';
import Modal from 'react-modal';

class MoviePanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPanelOpen: false
    }
  }
  
  togglePanel = () => {
    this.setState({ isPanelOpen: !this.state.isPanelOpen })
  }
    
  render() {
    return (
      <div id="moviePanelComponent">  
          {!this.state.isPanelOpen ? (
            <div className="closedPanel">
              <button 
              onClick={() => this.togglePanel()}>
                Open modal
              </button>
            </div>
          ): 
          <div className="openPanel">
          <Modal 
          isOpen={this.state.isPanelOpen}
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

export default MoviePanel;
