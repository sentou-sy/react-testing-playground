import { useState } from "react";

function useUser(initialUser) {
    const [ user, setUser ] = useState(initialUser);

    /**
     * add the users data to the list
     * @param {Event} e 
     */
    const handleAddUser = (newUser) => {
        setUser(newUser);
    };

    return { user, handleAddUser };
}

export default useUser;