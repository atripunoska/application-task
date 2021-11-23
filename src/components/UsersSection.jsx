import React, { useState } from 'react';
import UserList from "./UI/UserList";

function UsersSection() {
    const users = [
        {
            id: 1,
            img: "https://source.unsplash.com/collection/8669816/100x100?sig=15",
            firstname: "Deborah",
            lastname: "Miller",
            age: "25",
        },
        {
            id: 2,
            img: "https://source.unsplash.com/collection/8669816/100x100?sig=18",
            firstname: "Johannes",
            lastname: "Myles",
            age: "34",
        },
        {
            id: 3,
            img: "https://source.unsplash.com/collection/8669816/100x100?sig=345",
            firstname: "Britta",
            lastname: "Rhudinbergh",
            age: "43",
        },
        {
            id: 4,
            img: "https://source.unsplash.com/collection/8669816/100x100?sig=44",
            firstname: "Olivia",
            lastname: "Brown",
            age: "44",
        },
        {
            id: 5,
            img: "https://source.unsplash.com/collection/8669816/100x100?sig=657",
            firstname: "Daniel",
            lastname: "Rudin",
            age: "32",
        },
        {
            id: 6,
            img: "https://source.unsplash.com/collection/8669816/100x100?sig=89",
            firstname: "Teressa",
            lastname: "Sandhurst",
            age: "35",
        },
        {
            id: 7,
            img: "https://source.unsplash.com/collection/8669816/100x100?sig=877",
            firstname: "Dina",
            lastname: "Sokolowski",
            age: "28",
        },
        {
            id: 8,
            img: "https://source.unsplash.com/collection/8669816/100x100?sig=81",
            firstname: "André",
            lastname: "Szillagy",
            age: "23",
        },
        {
            id: 9,
            img: "https://source.unsplash.com/collection/8669816/100x100?sig=33",
            firstname: "Fabian",
            lastname: "Stocker",
            age: "45",
        },
        {
            id: 10,
            img: "https://source.unsplash.com/collection/8669816/100x100?sig=21",
            firstname: "Christian",
            lastname: "Williams",
            age: "41",
        },
    ];
    const [foundUsers, setFoundUsers] = useState(users);

    const [name, setName] = useState("");

    const searchData = (value) => {
        const keyword = value;
        if (keyword !== "" && keyword.length > 3) {
            const filteredData = users.filter((item) => {
                return item.firstname.toLowerCase().startsWith(keyword.toLowerCase());
            });
            //  console.log(filteredData)
            setFoundUsers(filteredData);
        } else {
            setFoundUsers(users);
        }
        setName(keyword);
    };

    return (
        <section id="sectionTwo" className="users">
            <h1 className="users__title">Section Three</h1>
            <div className="flex flex-jc-c">
                <input
                    type="text"
                    placeholder="Filter users"
                    value={name}
                    onChange={(e) => searchData(e.target.value)}
                    className="users__input"
                />
                <button className="users__button">Filter</button>
            </div>
            <div className="user-list">
                <ul>
                    {foundUsers && foundUsers.length > 0 ? (
                        foundUsers.map((user) => <UserList users={user} />)
                    ) : (
                        <li className="users__empty">Results are empty</li>
                    )}
                </ul>
            </div>
        </section>
    );
}

export default UsersSection;