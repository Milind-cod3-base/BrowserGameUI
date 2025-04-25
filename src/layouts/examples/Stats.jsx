import React from 'react';
import ProgressBar from '../../components/ProgressBar';

const Stats = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    minHeight: '100vh',
    marginTop: '-60px' // Added to push the stats card up. Adjust this value (e.g., -50px for less, -150px for more) to change the vertical position.
  }}>
    <div style={{ 
      backgroundColor: '#7A5C5C', 
      padding: '30px', 
      borderRadius: '10px', 
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', 
      minWidth: '500px', 
      minHeight: '250px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }}>
      <div style={{ color: '#FFD700', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ProgressBar resource="Quests Completed" value={50} maxValue={100} barColor="#FF6347" />
      </div>
      <div style={{ color: '#FFD700', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ProgressBar resource="Achievements Unlocked" value={20} maxValue={100} barColor="#FF6347" />
      </div>
      <div style={{ color: '#FFD700', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ProgressBar resource="Skill Mastery" value={50} maxValue={100} barColor="#FF6347" />
      </div>
	  <div style={{ color: '#FFD700', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ProgressBar resource="Enemies Defeated" value={70} maxValue={100} barColor="#FF6347" />
      </div>
    </div>
  </div>
);

export default Stats;