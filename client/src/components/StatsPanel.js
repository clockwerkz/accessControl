import React from 'react';

const StatsPanel = (props) => {
    return (
        <div className="stats-panel">
            <h2 className="stats-panel__title">Stats Panel</h2>
            <p className="stats-panel__label">Indoor Radiation Levels</p>
            <div className="stats-panel__guage">4.5 jules/hour</div>
            <p className="stats-panel__label">Outdoor Radiation Levels</p>
            <div className="stats-panel__guage">4.5 jules/hour</div>
            <p className="stats-panel__label">Active Cores</p>
            <div className="stats-panel__guage">4</div>
            <p className="stats-panel__label">Meltdown Imminent</p>
            <div className="stats-panel__guage">No</div>
            <p className="stats-panel__label">Avg Spent Fuel Rod Age</p>
            <div className="stats-panel__guage">8.4 years</div>
        </div>
    )
}


export default StatsPanel;