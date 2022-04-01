import React from 'react';
import  user from '../images/user.jpg';

const ContactCard = (props) => {
    const {id, name, email} = props.contact;
    return (
        <div key={id} className='myList'>
            <img className="userLogo" src={user} alt="user" />
            <div>{name}</div>
            <div>{email}</div>
            <div>
                <i className="material-icons">delete</i>
            </div>
        </div>
    );
};

export default ContactCard;