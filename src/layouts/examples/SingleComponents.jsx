import React from 'react';
import { Button, ProgressBar, Modal, CircleMenu } from '../../components';
import { circleMenuRandomData1, circleMenuRandomData2 } from '../../data/circleMenuRandomData';
import castleImg from '../../data/pictures/castle.png';

export default class SingleComponents extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      isClicked: false,
      isModal: false,
      isCircleMenu1: false,
      circleMenuPosition1: { x: 0, y: 0 },
      isCircleMenu2: false,
      circleMenuPosition2: { x: 0, y: 0 },
      isNewModal: false, // NEW: Added state variable to track visibility of the new custom modal
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleCircleMenu1 = this.toggleCircleMenu1.bind(this);
    this.toggleCircleMenu2 = this.toggleCircleMenu2.bind(this);
    this.toggleNewModal = this.toggleNewModal.bind(this); // NEW: Added binding for the toggleNewModal method to handle the new modal
    // ORIGINAL: No binding for toggleNewModal existed in the original constructor
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  toggleModal() {
    this.setState({ isModal: !this.state.isModal });
  }

  handleClick(e) {
    this.setState({ isClicked: true });
    this.toggleModal();
  }

  toggleCircleMenu1(event) {
    this.setState({
      isCircleMenu1: !this.state.isCircleMenu1,
      circleMenuPosition1: { x: event.clientX, y: event.clientY },
    });
  }

  toggleCircleMenu2(event) {
    this.setState({
      isCircleMenu2: !this.state.isCircleMenu2,
      circleMenuPosition2: { x: event.clientX, y: event.clientY },
    });
  }

  // NEW: Added toggleNewModal method to control the visibility of the new custom modal
  toggleNewModal() {
    this.setState({ isNewModal: !this.state.isNewModal });
  }
  // ORIGINAL: No toggleNewModal method existed in the original code

  render() {
    const { value, isClicked, isModal, isCircleMenu1, circleMenuPosition1, isCircleMenu2, circleMenuPosition2, isNewModal } = this.state;

    return (
      <div className="App" style={{ margin: 50 }}>
        <ProgressBar resource="Gold" value={isClicked ? Number(value) : 0} maxValue={228} />
        {/* NEW: Wrapped input in a div with marginTop to move it further down the page */}
        <div style={{ marginTop: '200px' , marginLeft: '200px'}}>
          <input type="text" onChange={this.handleChange} value={value} />
        </div>
        {/* ORIGINAL: Input was directly rendered with inline marginTop
          <input type="text" onChange={this.handleChange} value={value} style={{ marginTop: 50 }} />
        */}

        {/* NEW: Edited first button to change text and add styling */}
        <Button onClick={this.handleClick} style={{ backgroundColor: 'lightblue', padding: '10px' }}>
          Update Progress & Show Modal
        </Button>
        {/* ORIGINAL: First button had different text and no custom styling
          <Button onClick={this.handleClick}>change Bar value and show Modal</Button>
        */}

        <Button onClick={this.toggleCircleMenu1}>menu1Trigger</Button>
        <Button onClick={this.toggleCircleMenu2}>menu2Trigger</Button>

        {/* NEW: Added a new button to trigger the custom modal */}
        <Button onClick={this.toggleNewModal}>Show Custom Modal</Button>
        {/* ORIGINAL: No additional button existed in the original code */}

        {isCircleMenu1 ? (
          <CircleMenu
            menuItems={circleMenuRandomData1}
            x={circleMenuPosition1.x}
            y={circleMenuPosition1.y}
            closeMenuHandler={this.toggleCircleMenu1}
            centralImg={castleImg}
          />
        ) : null}
        {isCircleMenu2 ? (
          <CircleMenu
            menuItems={circleMenuRandomData2}
            x={circleMenuPosition2.x}
            y={circleMenuPosition2.y}
            closeMenuHandler={this.toggleCircleMenu2}
            centralImg={castleImg}
          />
        ) : null}
        {isModal ? (
          <Modal
            closeTrigger={this.toggleModal}
            header="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta in at enim sed. Facere accusantium impedit dolores quas debitis."
          />
        ) : null}
        {/* NEW: Added conditional rendering for the new custom modal */}
        {isNewModal ? (
          <Modal
            closeTrigger={this.toggleNewModal}
            header="Welcome to the Custom Modal!"
            paragraph="This is a brand new modal you just added."
          />
        ) : null}
        {/* ORIGINAL: No new modal rendering existed in the original code */}
      </div>
    );
  }
}