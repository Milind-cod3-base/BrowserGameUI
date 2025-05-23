import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const rotateItems = angle => keyframes`
  0% { top: 0; }
  30% { 
    top: -105px;
    transform: rotate(0deg); 
  }
  100% {
    top: -105px;
    transform: rotate(${angle}deg);
  }
`;

const StyledItem = styled.div`
  position: absolute;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  z-index: 100;
  transform-origin: 45px 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  background: #FFFFE0; /* CHANGED: Set to light yellow */
  animation: ${props => `${rotateItems(props.angle)} 1.2s forwards`}; /* CHANGED: Increased duration from 0.7s to 1.2s */
`;

StyledItem.propTypes = {
  angle: PropTypes.number.isRequired,
}

const ItemContent = styled.div`
  box-sizing: border-box;
  width: inherit;
  height: inherit;
  border: solid 2px black;
  border-radius: 50%;
  line-height: 90px;
  background: #FFFFE0; /* CHANGED: Set to light yellow */
  text-align: center;
  transform: ${props => `rotate(-${props.angle}deg) scale(${props.isSubMenu && props.subMenu ? '1.1, 1.1' : '1, 1'})`};
  cursor: pointer;
  opacity: ${props => !props.isSubMenu || props.subMenu ? 1 : 0.5};
  transition: opacity 0.5s;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  :hover {
    transform: rotate(-${props => props.angle}deg) scale(1.1, 1.1);
  }

  :active {
    transform: rotate(-${props => props.angle}deg) scale(1, 1);
  }
`;

ItemContent.propTypes = {
  angle: PropTypes.number.isRequired,
  isSubMenu: PropTypes.string.isRequired,
  subMenu: PropTypes.array,
}

const CircleMenuItem = ({ children, angle, onClick, isSubMenu, subMenu }) => (
  <StyledItem angle={angle} >
    <ItemContent angle={angle} onClick={onClick} isSubMenu={isSubMenu} subMenu={subMenu} >
      {children}
    </ItemContent>
    {subMenu}
  </StyledItem>
);

CircleMenuItem.defaultProps = {
  subMenu: null,
}

CircleMenuItem.propTypes = {
  children: PropTypes.string.isRequired,
  angle: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  isSubMenu: PropTypes.string.isRequired,
  subMenu: PropTypes.array,
}

export default CircleMenuItem;