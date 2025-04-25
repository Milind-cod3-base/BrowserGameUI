import React from 'react';
import ProgressBar from '../../components/ProgressBar';
import statsBackgroundImg from '../../data/pictures/backgroundstats.jpg'; // Import the background image

const Stats = () => (
  <div style={{ 
    display: 'flex', 
    flexDirection: 'column', // Changed to column to match the layout
    alignItems: 'center', 
    minHeight: '100vh',
    paddingTop: '60px' // Ensure content starts below the navigation bar (approx. 50px height + padding)
  }}>
    <div style={{
      width: '100%',
      minHeight: 'calc(100vh - 60px)', // Subtract the navigation bar height
      backgroundImage: `url(${statsBackgroundImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: '100px' // Adjust the stats card position (matches the original marginTop)
    }}>
      <div style={{ 
        backgroundColor: '#1A3C34', 
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
  </div>
);

export default Stats;