import React from "react";

function UserList(props) {

    return (
        <ul>
            {props.coll.map((user, i) => (
                <li class="is-size-1" key={i}>
                    {props.renderData(user)}
                </li>
            ))}
        </ul>
    );
}

export default UserList;