import React from 'react';
import { Button, Modal, CircleMenu } from '../../components';
import castleImg from '../../data/pictures/castle.png';

export default class SingleComponents extends React.Component {
  constructor() {
    super();
    this.state = {
      isCircleMenu: false,
      circleMenuPosition: { x: 0, y: 0 },
      isSettingsModal: false,
      isCreditsModal: false,
    };
    this.toggleCircleMenu = this.toggleCircleMenu.bind(this);
    this.toggleSettingsModal = this.toggleSettingsModal.bind(this);
    this.toggleCreditsModal = this.toggleCreditsModal.bind(this);
  }

  toggleCircleMenu(event) {
    this.setState({
      isCircleMenu: !this.state.isCircleMenu,
      circleMenuPosition: { x: event.clientX, y: event.clientY },
    });
  }

  toggleSettingsModal() {
    this.setState({ isSettingsModal: !this.state.isSettingsModal });
  }

  toggleCreditsModal() {
    this.setState({ isCreditsModal: !this.state.isCreditsModal });
  }

  render() {
    const { isCircleMenu, circleMenuPosition, isSettingsModal, isCreditsModal } = this.state;

    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        minHeight: '100vh', 
        textAlign: 'center',
        marginTop: '190px' // Adjust this value to change the vertical height of the title and menu button. Smaller values (e.g., 50px) move them higher; larger values (e.g., 200px) move them lower.
      }}>
        <h1 style={{ fontSize: '48px', color: '#FFD700', textShadow: '2px 2px #000' }}>
          Quest of the Ancients
        </h1>
        <Button
          onClick={this.toggleCircleMenu}
          style={{ fontSize: '24px', padding: '10px 20px', margin: '20px', backgroundColor: '#8B4513', color: '#FFF' }}
        >
          Menu
        </Button>
        {isCircleMenu && (
          <CircleMenu
            menuItems={[
              { name: 'Start Game', action: () => alert('Embarking on your quest...') },
              { name: 'Load Game', action: () => alert('Resuming your journey...') },
              { name: 'Settings', action: this.toggleSettingsModal },
              { name: 'Credits', action: this.toggleCreditsModal },
            ]}
            x={circleMenuPosition.x}
            y={circleMenuPosition.y}
            closeMenuHandler={this.toggleCircleMenu}
            centralImg={castleImg}
          />
        )}
        {isSettingsModal && (
          <Modal
            closeTrigger={this.toggleSettingsModal}
            header="Settings"
            paragraph="Adjust your adventure settings here."
          />
        )}
        {isCreditsModal && (
          <Modal
            closeTrigger={this.toggleCreditsModal}
            header="Credits"
            paragraph="Crafted by the Guild of Code Weavers."
          />
        )}
      </div>
    );
  }
}