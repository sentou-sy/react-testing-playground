import React from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";
import useCollection from "./useCollection";
import useUser from "./useUser";
import "bulma";

function App() {

    // we can use the initialUser to set and reset the form
    const initialUser = {
        firstName: "", age: ""
    };
    const { user, handleAddUser } = useUser(initialUser);
    const { coll, handleAddCollectionItem } = useCollection();

    /**
     * generic function for updating the state of fields
     * @param {Event} e 
     */
    const handleInputChange = (e) => {
        const target = e.currentTarget;
        const value = target.type === "checkbox" ? target.checked : target.value;
        handleAddUser({...user, [target.name]: value});
    };

    const validateUser = (currUser) => {
        if(currUser.firstName && currUser.age) {
            return true;
        }

        return false;
    }

    /**
     * add the users data to the list
     * @param {Event} e 
     */
    const handleSubmit = (e) => {
        if(validateUser(user)) {
            handleAddCollectionItem(user);
            handleAddUser(initialUser);    
        }
        e.preventDefault();
    };

    return (
        <div>
            <section className="hero">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            Hello World!
                        </h1>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <UserForm 
                        onSubmit={handleSubmit} 
                        onChange={handleInputChange} 
                        user={user}
                    />
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <UserList
                        coll={coll}
                        renderData={(user) => (
                            <>
                                {user.firstName}: {user.age} years old
                            </>    
                        )}
                    />
                </div>
            </section>
        </div>
    );
}

export default App;