import React from 'react';
import { Button, Modal, CircleMenu } from '../../components';
import castleImg from '../../data/pictures/castle.png';
import backgroundImg from '../../data/pictures/backgroundstats.jpg';

export default class SingleComponents extends React.Component {
  constructor() {
    super();
    this.state = {
      isCircleMenu: false,
      circleMenuPosition: { x: 0, y: 0 },
      isSettingsModal: false,
      isCreditsModal: false,
      isStartGameModal: false,
      isLoadGameModal: false,
    };
    this.toggleCircleMenu = this.toggleCircleMenu.bind(this);
    this.toggleSettingsModal = this.toggleSettingsModal.bind(this);
    this.toggleCreditsModal = this.toggleCreditsModal.bind(this);
    this.toggleStartGameModal = this.toggleStartGameModal.bind(this);
    this.toggleLoadGameModal = this.toggleLoadGameModal.bind(this);
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

  toggleStartGameModal() {
    this.setState({ isStartGameModal: !this.state.isStartGameModal });
  }

  toggleLoadGameModal() {
    this.setState({ isLoadGameModal: !this.state.isLoadGameModal });
  }

  render() {
    const { isCircleMenu, circleMenuPosition, isSettingsModal, isCreditsModal, isStartGameModal, isLoadGameModal } = this.state;

    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        minHeight: '100vh', 
        textAlign: 'center',
        paddingTop: '60px' // Ensure content starts below the navigation bar
      }}>
        <div style={{
          width: '100%',
          minHeight: 'calc(100vh - 60px)', // Subtract the navigation bar height
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '190px' // Push the brown pad down to its original position
        }}>
          <div style={{ 
            backgroundColor: '#1A3C34', 
            padding: '20px', 
            borderRadius: '10px', 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' 
          }}>
            <h1 style={{ fontSize: '48px', color: '#FFD700', textShadow: '2px 2px #000' }}>
              Quest of the Ancients
            </h1>
            <Button
              onClick={this.toggleCircleMenu}
              style={{ fontSize: '24px', padding: '10px 20px', margin: '20px', backgroundColor: '#8B4513', color: '#FFF' }}
            >
              Play
            </Button>
          </div>
        </div>
        {isCircleMenu && (
          <CircleMenu
            menuItems={[
              { name: 'Start Game', action: this.toggleStartGameModal },
              { name: 'Load Game', action: this.toggleLoadGameModal },
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
            style={{ backgroundColor: 'rgba(255, 215, 0, 0.2)' }}
          />
        )}
        {isCreditsModal && (
          <Modal
            closeTrigger={this.toggleCreditsModal}
            header="Credits"
            paragraph="Crafted by Milind."
            style={{ backgroundColor: 'rgba(255, 215, 0, 0.2)' }}
          />
        )}
        {isStartGameModal && (
          <Modal
            closeTrigger={this.toggleStartGameModal}
            header="Start Game"
            paragraph="Embark on a new quest to uncover the secrets of the ancients."
            style={{ backgroundColor: 'rgba(255, 215, 0, 0.2)' }}
          />
        )}
        {isLoadGameModal && (
          <Modal
            closeTrigger={this.toggleLoadGameModal}
            header="Load Game"
            paragraph="Continue your journey where you left off."
            style={{ backgroundColor: 'rgba(255, 215, 0, 0.2)' }}
          />
        )}
      </div>
    );
  }
}