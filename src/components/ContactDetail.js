import React from "react";
import { useLocation, Link } from "react-router-dom";
import user from "../images/user.jpg";

export default function ContactDetail() {
  
  let location = useLocation();
  const { name, email } = location.state.contact;

  return (
    <div className="mainContent">
      <img src={user} alt="user" style={{ height: "30%", width: "30%" }} />
      <br />
      <span>{name}</span>
      <br />
      <span>{email}</span>
      <div>
        <Link to="/">
          <button className="myBtn">Back to Contact List</button>
        </Link>
      </div>
    </div>
  );
}
