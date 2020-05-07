import { useState } from "react";

function useUser(initialUser) {
    const [ user, setUser ] = useState(initialUser);

    const handleChangeUser = (newUser) => {
        setUser(newUser);
    };

    return { user, handleChangeUser };
}

export default useUser;