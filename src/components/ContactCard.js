import React from 'react';
import { Link } from 'react-router-dom';
import user from '../images/user.jpg';

const ContactCard = (props) => {
    const { id, name, email } = props.contact;
    return (
        <div className='myList'>
            <img className="userLogo" src={user} alt="user" />
            <Link
                to={`/contact/${id}`} state={{ contact: props.contact }}
                key={id}
            ><div className='myLinks'>
                    <div>{name}</div>
                    <div>{email}</div>
                </div>
            </Link>
            <div>
                <button className='deleteBtn'>
                    <i className="material-icons"
                        onClick={() => props.clickHandler(id)}
                    >delete</i>
                </button>
            </div>
        </div>
    );
};

export default ContactCard;