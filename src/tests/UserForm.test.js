import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import UserForm from "./../UserForm";

// boots up the <UserForm /> so we can share the dom with all tests
let utils, firstName, age, handleChange, handleSubmit;
beforeEach(() => {
    handleChange = jest.fn();
    handleSubmit = jest.fn();
    // render App
    utils = render(
        <UserForm
            onSubmit={ handleSubmit }
            onChange={ handleChange }
            user={ {
                firstName: "Max",
                age: 19,
            } }
        />
    );
    firstName = utils.getByTestId("firstName");
    age = utils.getByTestId("age");
});
afterEach(cleanup);

describe("<UserForm />", () => {

    it("can handle Events correctly", () => {
        // simulate form submission
        fireEvent.submit(utils.getByTestId("form"));
        expect(handleSubmit).toBeCalled();

        // simulate form change
        fireEvent.change(firstName, {
            target: {
                value: "Moritz",
            }
        });
        fireEvent.change(age, {
            target: {
                value: "18",
            }
        });
        expect(handleChange).toBeCalledTimes(2);
    });
});