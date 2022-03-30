import React from 'react';

const ContactList = (props) => {

    const renderContactList = props.contacts.map((contact) => {
        return (
            <div key={contact.id}>
                <div>{contact.name}</div>
                <div>{contact.email}</div>
            </div>
        );
    })

    return <div>{renderContactList}</div>
};

export default ContactList;