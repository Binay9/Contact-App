import React from 'react';

const ContactList = (props) => {

    const renderContactList = props.contacts.map((contact) => {
        return (

            <div>
            </div>
        );
    })

    return <div>{renderContactList}</div>
};

export default ContactList;