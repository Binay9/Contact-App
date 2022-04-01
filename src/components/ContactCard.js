import React from 'react';
import user from '../images/user.jpg';

const ContactCard = (props) => {
    const { id, name, email } = props.contact;
    return (
        <div className='myList'>
            <img className="userLogo" src={user} alt="user" />
            <div>{name}</div>
            <div>{email}</div>
            <div>
                <button>
                    <i className="material-icons"
                        onClick={() => props.clickHandler(id)}
                    >delete</i>
                </button>
            </div>
        </div>
    );
};

export default ContactCard;