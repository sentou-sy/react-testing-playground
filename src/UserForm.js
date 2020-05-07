import React from "react";

function UserForm(props) {
    return (
        <form data-testid="form" onSubmit={props.onSubmit}>
            <div className="field">
                <label className="label">First Name</label>
                <div className="control">
                    <input data-testid="firstName" className="input" type="text" name="firstName" placeholder="first name" value={props.user.firstName} onChange={props.onChange} />
                </div>
            </div>
            <div className="field">
                <label className="label">Age</label>
                <div className="control">
                    <input data-testid="age" className="input" type="number" name="age" placeholder="age" value={props.user.age} onChange={props.onChange} />
                </div>
            </div>
            <div className="control">
                <button data-testid="submit" className="button is-primary">Submit</button>
            </div>
        </form>
    );
}

export default UserForm;