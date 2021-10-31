import React, { useState } from 'react';
import { addDoc } from '@firebase/firestore';

const CreateEvent = props => {

    const { eventsCollectionRef, user } = props;

    const [newEventName, setNewEventName] = useState('');
    const [newEventDescription, setNewEventDescription] = useState('');
    const [newEventDate, setNewEventDate] = useState('');
    const [newEventMonth, setNewEventMonth] = useState('');
    const [newEventYear, setNewEventYear] = useState('');
    const [eventCreationError, setEventCreationError] = useState('');

    const
        handleNewEventDateChange = (e) => {
            if (isNaN(parseInt(e.target.value))) return setNewEventDate('');
            else return setNewEventDate(e.target.value);
        },
        handleNewEventMonthChange = (e) => {
            if (isNaN(parseInt(e.target.value))) return setNewEventMonth('');
            else return setNewEventMonth(e.target.value);
        },
        handleNewEventYearChange = (e) => {
            if (isNaN(parseInt(e.target.value))) return setNewEventYear('');
            else return setNewEventYear(e.target.value);
        };

    const createEvent = async () => {
        if ( parseInt(newEventDate) > 0 && parseInt(newEventDate) < 32 &&
            parseInt(newEventMonth) > 0 && parseInt(newEventMonth) < 13 ) {
            await addDoc(eventsCollectionRef, {
                author: user,
                title: newEventName,
                description: newEventDescription,
                date: newEventDate,
                month: newEventMonth,
                year: newEventYear
            });
            setNewEventName('');
            setNewEventDescription('');
            setNewEventDate('');
            setNewEventMonth('');
            setNewEventYear('');
            setEventCreationError('');
            window.location.reload(false);
        }
        else {
            setEventCreationError('Provided date, month or year credentials are invalid!')
        }
    }

    return (
        <>
            <h1>Create Event</h1>
            <input
                type='text'
                onChange={ e => setNewEventName(e.target.value) }
                value={ newEventName }
                placeholder='Event Name'
            />
            <input
                type='text'
                value={ newEventDescription }
                onChange={ e => setNewEventDescription(e.target.value)}
                placeholder='Event Description'
            />
            <input
                type='text'
                value={ newEventDate }
                onChange={ handleNewEventDateChange }
                placeholder='dd'
                maxlength='2'
                className='inline-inputs'
            />
            <input
                type='text'
                value={ newEventMonth }
                onChange={ handleNewEventMonthChange }
                placeholder='mm'
                maxlength='2'
                className='inline-inputs'
            />
            <input
                type='text'
                value={ newEventYear }
                onChange={ handleNewEventYearChange }
                placeholder='yyyy'
                maxlength='4'
                className='last-child'
            />
            <button onClick={ createEvent }>Create</button>
            <p className='error-message'>{ eventCreationError }</p>
        </>
    );
};

export default CreateEvent;