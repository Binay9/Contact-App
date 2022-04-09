import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";



export default function AddContact(props) {

    const [info, setInfo] = useState({});

    const navigate = useNavigate();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInfo(values => ({ ...values, [name]: value }))

    }

    const add = (e) => {

        e.preventDefault();

        if (info.name === "" || info.email === "") {
            alert("All input are required !!");
            return
        }
        props.addContactHandler(info);
        setInfo({ name: '', email: '' });
        navigate("/");

    };

    return (
        <div className='mainContent'>
            <h3 className='subHead'>Add Contact</h3>
            <form onSubmit={add}>
                <div>
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Enter name here"
                        value={info.name || ""}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Enter email here"
                        value={info.email || ""}
                        onChange={handleChange}
                    />
                </div>

                <button className='myBtn' type="submit" value="Submit" >Submit</button>
            </form>

        </div>
    );
}
