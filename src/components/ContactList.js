import React from 'react';
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';

const ContactList = (props) => {

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };

    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard
                contact={contact}
                clickHandler={deleteContactHandler}
                key={contact.id}
            >
            </ContactCard>
        );
    })

    return (
        <div>
            <h3>Contact List</h3>
            <Link to="/add">
                <button className='myBtn'>Add Contact</button>
            </Link>
            <div className='row-item2'>{renderContactList}</div>
        </div>
    );
};

export default ContactList;