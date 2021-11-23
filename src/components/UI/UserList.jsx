import React, { useState } from "react";

function UserList(props) {
    const [userClicked, setUserClicked] = useState(false);
    const handleToggle = () => {
        setUserClicked(!userClicked);
    };

    return <>{displayUsers()}</>;
    function displayUsers() {
        const listItems = (
            <li key={props.users.id}>
                <article className="user">
                    <button className="user__trigger" onClick={handleToggle}>
                        <div className="user__image">
                            <img src={props.users.img} alt="" />
                        </div>
                        <div className="user__info">
                            <h2>{props.users.firstname}</h2>
                        </div>
                    </button>
                    <div className={`user__extra-info ${userClicked ? "show" : ""}`}>
                        <strong>Full Info for the user</strong>
                        <div> <span className="">First Name:</span> {props.users.firstname}</div>
                        <div> <span> Last Name:</span> {props.users.lastname}</div>
                        <div> <span>Age: {props.users.age}</span></div>
                    </div>
                </article>
            </li>
        );

        return listItems;
    }
}

export default UserList;
