import React from 'react';
import { Link } from 'react-router-dom';
import user from '../images/user.jpg';

const ContactCard = (props) => {
    const { id, name, email } = props.contact;

    const onClickConfrim = () => {
        const result = window.confirm("Are you for sure delete this contact ?");
        if (result === true) {
            props.clickHandler(id)
        }
    };

    return (
        <div className='myList'>
            {/* Image */}
            <div>
                <img className="userLogo" src={user} alt="user" />
            </div>
            {/* User */}
            <div className='flexBasis'>
                <Link
                    to={`/contact/${id}`} state={{ contact: props.contact }}
                    key={id}
                ><div className='myLinks'>
                        <div>{name}</div>
                        <div>{email}</div>
                    </div>
                </Link>
            </div>
            <div>
                {/* Edit */}
                <Link to="edit" state={{ contact: props.contact }}>
                    <button type="button" className="button btnEdit">
                        <i className="bi-pencil-square" title='Edit'></i>
                    </button>
                </Link>
                {/* Delete */}
                {/* <button type="button" className="button btnDelete" onClick={() => props.clickHandler(id)}> */}
                <button type="button" className="button btnDelete" onClick={onClickConfrim}>
                    <i className="bi-trash3" title='Delete'></i>
                </button>
            </div>
        </div>
    );
};

export default ContactCard;