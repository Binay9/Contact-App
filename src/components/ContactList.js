import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';

const ContactList = (props) => {
    const inputEl = useRef("");
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };

    const getSearchTerm = () => {
        props.searchInput(inputEl.current.value);
    }

    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard
                contact={contact}
                clickHandler={deleteContactHandler}
                key={contact.id}
            />
        );
    })

    return (
        <div className='mainContent'>
            <h3 className='subHead'>Contact List</h3>
            <div className='flexView'>
                <input
                ref={inputEl}
                type="text" 
                name="searchTxt" 
                value={props.term || ""}
                onChange={getSearchTerm}
                placeholder="Enter to search contact..." 
                />
                <Link to="/add">
                    <button className='mySmBtn'>Add Contact</button>
                </Link>
            </div>
            <div className='row-item'>{renderContactList.length > 0 ? renderContactList : " No contact available. "}</div>
        </div>
    );
};

export default ContactList;