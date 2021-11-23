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
                        <div> First Name: {props.users.firstname}</div>
                        <div> Last Name: {props.users.lastname}</div>
                        <div> Age: {props.users.age}</div>
                    </div>
                </article>
            </li>
        );

        return listItems;
    }
}

export default UserList;
