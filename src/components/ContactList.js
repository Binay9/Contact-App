import React from 'react';

const ContactList = (props) => {

    const renderContactList = props.contacts.map((contact) => {
        return (
            <div key={contact.id} className='myList'>
                <div>{contact.name}</div>
                <div>{contact.email}</div>
                <div>
                    <i className="material-icons">delete</i>
                </div>
            </div>
        );
    })

    return <div className='row-item2'>{renderContactList}</div>
};

export default ContactList;