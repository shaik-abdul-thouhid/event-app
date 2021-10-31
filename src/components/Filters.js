import React from 'react';
import './Filters.css';

const p = {
    marginTop: '12px',
    marginBottom:'50px',
    display: 'inline-block'
};

const Filters = props => {

    const {
        setUserFilter,
        setTimeFilter,
    } = props;

    return (
        <>
            <h3 id='filter'>Filters</h3>
            <div div='user-filter' style={ p }>
                <p style={{ display: 'inline' }}>Select Users:</p>
                <select style={{ display: 'inline', marginLeft: '13px' }} onChange={ e => setUserFilter(e.target.value) }>
                    <option value='all' selected>All</option>
                    <option value='current-user'>Current User</option>
                    <option value='other-users'>Other Users</option>
                </select>
            </div>
            <div div='time-filter'>
                <p style={{ display: 'inline', marginRigth: '13px' }}>Select Time:</p>
                <select style={{ display: 'inline', marginLeft: '13px' }} onChange={ e => setTimeFilter(e.target.value) }>
                    <option value='all' selected>All</option>
                    <option value='past-events'>Past Events</option>
                    <option value='upcoming-events'>Upcoming Events</option>
                </select>
            </div>
        </>
    );
};

export default Filters;