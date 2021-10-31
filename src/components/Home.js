import React, { useState, useEffect } from 'react';
import './Home.css';
import {
    getFirestore,
    collection,
    getDocs,
    doc,
    deleteDoc
} from '@firebase/firestore';
import EventsList from './EventsList';
import CreateEvent from './CreateEvent';
import Filters from './Filters';

const Home = props => {
    const {
        firebaseConfig,
        user
    } = props;
    const db = getFirestore(firebaseConfig);
    const eventsCollectionRef = collection(db, 'events-list');

    const [eventsDB, setEventsDB] = useState([]);
    const [userFilter, setUserFilter] = useState('all');
    const [timeFilter, setTimeFilter] = useState('all');

    useEffect(() => {
        const getEventsFromFirestore = async () => {
            const data = await getDocs(eventsCollectionRef);
            setEventsDB(data.docs.map((event) => (
                {
                    ...event.data(),
                    id: event.id
                }
            )))
        }
        getEventsFromFirestore();
    }, []);

    const deleteEvent = async (id) => {
        const del = doc(db, 'events-list', id);
        await deleteDoc(del);
        window.location.reload(false);
    }

    return (
        <>
            <div className='eventslist'>
                <EventsList
                    events={ eventsDB }
                    user={ user }
                    userFilter={ userFilter }
                    timeFilter={ timeFilter }
                    deleteEvent={ deleteEvent }
                />
            </div>
            <div className='filterColumn'>
                <div className='row-1'>
                    <CreateEvent eventsCollectionRef={ eventsCollectionRef } user={ user } />
                </div>
                <div className='row-2'>
                    <Filters
                    setUserFilter={ setUserFilter }
                    setTimeFilter={ setTimeFilter }
                />
                </div>
            </div>
        </>
    );
};

export default Home;