import React from "react";

function UserForm(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <div className="field">
                <label className="label">First Name</label>
                <div className="control">
                    <input className="input" type="text" name="firstName" placeholder="first name" value={props.user.firstName} onChange={props.onChange} />
                </div>
            </div>
            <div className="field">
                <label className="label">First Name</label>
                <div className="control">
                    <input className="input" type="number" name="age" placeholder="age" value={props.user.age} onChange={props.onChange} />
                </div>
            </div>
            <div className="control">
                <button className="button is-primary">Submit</button>
            </div>
        </form>
    );
}

export default UserForm;