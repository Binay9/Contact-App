import React from 'react';
import { Link } from 'react-router-dom';
import user from '../images/user.jpg';

const ContactCard = (props) => {
    const { id, name, email } = props.contact;
    return (
        <div className='myList'>
            <div>
                <img className="userLogo" src={user} alt="user" />
            </div>
            <div className='flexBasis'>
                <Link
                    to={`/contact/${id}`} state={{ contact: props.contact }}
                    key={id}
                ><div className='myLinks'>
                        <div>{name.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}</div>
                        <div>{email}</div>
                    </div>
                </Link>
            </div>
            <div>
                <button type ="button" className="button btnDelete" onClick={ () => props.clickHandler(id) }>
                <i className="bi-trash3" title='Delete'></i>
                </button>
            {/* </div>
            <div> */}
                <button type ="button" className="button btnEdit">
                <i className="bi-pencil-square" title='Edit'></i>
                </button>
            </div>
        </div>
    );
};

export default ContactCard;