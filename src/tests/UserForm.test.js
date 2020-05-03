import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import UserForm from "./../UserForm";

afterEach(cleanup);

test("<UserForm /> can handle Events corectly", () => {
    const handleChange = jest.fn();
    const handleSubmit = jest.fn();
    const {container} = render(<UserForm 
        onSubmit={handleSubmit}
        onChange={handleChange}
        user={{
            firstName: "Max",
            age: 19,
        }}
    />);

    // simulate form submission
    fireEvent.submit(container.querySelector("form"));
    expect(handleSubmit).toBeCalled();

    // simulate form change
    fireEvent.change(container.querySelector("input[name=firstName]"), { 
        target: {
            value: "Moritz",
        }
    });
    fireEvent.change(container.querySelector("input[name=age]"), {
        target: {
            value: "18",
        }
    });
    expect(handleChange).toBeCalledTimes(2);
});