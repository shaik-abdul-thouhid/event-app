import React from 'react';

let today = new Date();

const deleteIcon = {
    width: '17px',
}, Icon = {
    textAlign: 'center'
};

const sortedEvents = (events, direction) => {
    events.sort((a, b) => {
        return parseInt(b.year) - parseInt(a.year);
    });
    events.sort((a, b) => {
        if (parseInt(a.year) === parseInt(b.year)) {
            return parseInt(b.month) - parseInt(a.month);
        }
    });
    events.sort((a, b) => {
        if (parseInt(a.year) === parseInt(b.year) && parseInt(a.month) === parseInt(b.month)) {
            return parseInt(b.date) - parseInt(a.date);
        }
    });
}

const EventsList = props => {

    const {
        events,
        userFilter,
        timeFilter,
        user,
        deleteEvent
    } = props;

    sortedEvents(events);
    const returnTemplate = (event) => {
        return (
            <tr key={ event.id }>
                <td><h4 title={ event.title }>{ event.title }</h4></td>
                <td><p title={ event.description }>{ event.description }</p></td>
                <td><p title={ `${ parseInt(event.date) }/${ parseInt(event.month) }/${ parseInt(event.year) }` }>{ `${ parseInt(event.date) }/${ parseInt(event.month) }/${ parseInt(event.year) }` }</p></td>
                <td><p title={ event.author }>{ event.author }</p></td>
                <td><button onClick={ () => deleteEvent(event.id) } style={ Icon } title='Delete'><img style={ deleteIcon } src='https://img.icons8.com/material-rounded/24/000000/delete-sign.png' alt={ event.id } /></button></td>
            </tr>
        );
    };

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <td><h3>Event</h3></td>
                        <td><h3>Description</h3></td>
                        <td><h3>Dated</h3></td>
                        <td><h3>Author</h3></td>
                        <td><h3>Delete</h3></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        events.map((event) => {
                            if (userFilter === 'all') {
                                if (timeFilter === 'all') {
                                    return returnTemplate(event);
                                }
                                else if (timeFilter === 'past-events') {
                                    if (parseInt(event.year) < parseInt(today.getFullYear())) {
                                        return returnTemplate(event);
                                    }
                                    else if (parseInt(event.year) === parseInt(today.getFullYear()) &&
                                        parseInt(event.month) < (parseInt(today.getMonth()) + 1)) {
                                        return returnTemplate(event);
                                    }
                                    else if (parseInt(event.year) === parseInt(today.getFullYear()) &&
                                        parseInt(event.month) === (parseInt(today.getMonth()) + 1) &&
                                        parseInt(event.date) < parseInt(today.getDate())) {
                                            return returnTemplate(event);
                                    }
                                }
                                else if (timeFilter === 'upcoming-events') {
                                    if (parseInt(event.year) > parseInt(today.getFullYear())) {
                                        return returnTemplate(event);
                                    }
                                    else if (parseInt(event.year) === parseInt(today.getFullYear()) &&
                                        parseInt(event.month) > (parseInt(today.getMonth()) + 1)) {
                                        return returnTemplate(event);
                                    }
                                    else if (parseInt(event.year) === parseInt(today.getFullYear()) &&
                                        parseInt(event.month) === (parseInt(today.getMonth()) + 1) &&
                                        parseInt(event.date) > parseInt(today.getDate())) {
                                            return returnTemplate(event);
                                    }
                                }
                            }
                            else if (userFilter === 'current-user') {
                                if (event.author === user) {
                                    if (timeFilter === 'all') {
                                        return returnTemplate(event);
                                    }
                                    else if (timeFilter === 'past-events') {
                                        if (parseInt(event.year) < parseInt(today.getFullYear())) {
                                            return returnTemplate(event);
                                        }
                                        else if (parseInt(event.year) === parseInt(today.getFullYear()) &&
                                            parseInt(event.month) < (parseInt(today.getMonth()) + 1)) {
                                            return returnTemplate(event);
                                        }
                                        else if (parseInt(event.year) === parseInt(today.getFullYear()) &&
                                            parseInt(event.month) === (parseInt(today.getMonth()) + 1) &&
                                            parseInt(event.date) < parseInt(today.getDate())) {
                                                return returnTemplate(event);
                                        }
                                    }
                                    else if (timeFilter === 'upcoming-events') {
                                        if (parseInt(event.year) > parseInt(today.getFullYear())) {
                                            return returnTemplate(event);
                                        }
                                        else if (parseInt(event.year) === parseInt(today.getFullYear()) &&
                                            parseInt(event.month) > (parseInt(today.getMonth()) + 1)) {
                                            return returnTemplate(event);
                                        }
                                        else if (parseInt(event.year) === parseInt(today.getFullYear()) &&
                                            parseInt(event.month) === (parseInt(today.getMonth()) + 1) &&
                                            parseInt(event.date) > parseInt(today.getDate())) {
                                                return returnTemplate(event);
                                        }
                                    }
                                }
                            }
                            else if (userFilter === 'other-users') {
                                if (event.author !== user) {
                                    if (timeFilter === 'all') {
                                        return returnTemplate(event);
                                    }
                                    else if (timeFilter === 'past-events') {
                                        if (parseInt(event.year) < parseInt(today.getFullYear())) {
                                            return returnTemplate(event);
                                        }
                                        else if (parseInt(event.year) === parseInt(today.getFullYear()) &&
                                            parseInt(event.month) < (parseInt(today.getMonth()) + 1)) {
                                            return returnTemplate(event);
                                        }
                                        else if (parseInt(event.year) === parseInt(today.getFullYear()) &&
                                            parseInt(event.month) === (parseInt(today.getMonth()) + 1) &&
                                            parseInt(event.date) < parseInt(today.getDate())) {
                                                return returnTemplate(event);
                                        }
                                    }
                                    else if (timeFilter === 'upcoming-events') {
                                        if (parseInt(event.year) > parseInt(today.getFullYear())) {
                                            return returnTemplate(event);
                                        }
                                        else if (parseInt(event.year) === parseInt(today.getFullYear()) &&
                                            parseInt(event.month) > (parseInt(today.getMonth()) + 1)) {
                                            return returnTemplate(event);
                                        }
                                        else if (parseInt(event.year) === parseInt(today.getFullYear()) &&
                                            parseInt(event.month) === (parseInt(today.getMonth()) + 1) &&
                                            parseInt(event.date) > parseInt(today.getDate())) {
                                                return returnTemplate(event);
                                        }
                                    }
                                }
                            }
                        })
                    }
                </tbody>
            </table>
        </>
    );
};

export default EventsList;